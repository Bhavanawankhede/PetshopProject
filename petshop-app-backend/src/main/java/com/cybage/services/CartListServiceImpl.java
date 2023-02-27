
package com.cybage.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.daos.CartItemRepository;
import com.cybage.daos.ItemRepository;
import com.cybage.daos.UserRepository;
import com.cybage.dtos.CartItemResponse;
import com.cybage.entities.CartItem;
import com.cybage.entities.Item;
import com.cybage.entities.User;

@Service
public class CartListServiceImpl implements ICartService {

	@Autowired
	CartItemRepository cartItemRepository;
	
	@Autowired
	ItemRepository itemRepository;
	
	@Autowired
	ItemServiceImpl itemServiceImpl;
	
	@Autowired
	UserRepository userRepository;

	@Override
	public CartItem addToCartList(int id, String userEmail) {
		CartItem cartItem = new CartItem();
		List<CartItem> cartItemList  = new ArrayList<>();
		User user = userRepository.findByUserEmail(userEmail);
		Item item = itemServiceImpl.findByItemId(id);
		cartItem.setItem(item);
		cartItemList.add(cartItem);
		item.getCartItem().addAll(cartItemList);
		cartItem.setUserMail(user);
		return cartItemRepository.save(cartItem);
	}

	@Override
	public List<CartItemResponse> getCartList(String userEmail) {
		List<CartItem> cartItems = new ArrayList<>();
		cartItems = cartItemRepository.getCartList(userEmail);
		CartItemResponse cartItemResponse = new CartItemResponse();
		List<CartItemResponse> cartItemResponses = new ArrayList<>();
		for(int i=0;i<cartItems.size();i++) {
			Item item = itemServiceImpl.findByItemId(cartItems.get(i).getItem().getItemId());
			cartItemResponse = CartItemResponse.toFavouriteItemResponse(item);
			cartItemResponses.add(cartItemResponse);
		}
		return cartItemResponses;
	}

	@Override
	public void removeCartItem(int id, String userEmail) {
		
		List<CartItem> cartItems = cartItemRepository.getCartList(userEmail);
		
		CartItem item = null;
		for (CartItem item1 : cartItems) {
			if (item1.getCartItemId() == id) {
				item = item1;
				
			}
		}
		cartItems.remove(item);
		cartItemRepository.deleteByCartItemId(id);
		cartItemRepository.saveAll(cartItems);
		
	}

	@Override
	public void clearCartList(String userEmail) {
		cartItemRepository.deleteByUserEmail(userEmail);
		
	}

	@Override
	public CartItem findByCartItemId(int cartItemId) {
		return cartItemRepository.findByCartItemId(cartItemId);
	}

	@Override
	public CartItem getCartItemIdFromItemId(int itemId) {
		return cartItemRepository.getCartItemIdFromItemId(itemId);
	}

	

	
}