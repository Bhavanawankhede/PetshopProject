package com.cybage.services;

import java.util.List;

import com.cybage.dtos.CartItemResponse;
import com.cybage.entities.CartItem;

public interface ICartService {
		
	public CartItem addToCartList(int id, String userEmail);

	public List<CartItemResponse> getCartList(String userEmail);
	
	public void removeCartItem(int id,String userEmail);
	
	public void clearCartList(String userEmail);
	
	public CartItem findByCartItemId(int cartItemId);
	
	public CartItem getCartItemIdFromItemId(int itemId);


	
}
