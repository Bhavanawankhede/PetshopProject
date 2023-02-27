
package com.cybage.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.daos.FavouriteItemRepository;
import com.cybage.daos.ItemRepository;
import com.cybage.daos.UserRepository;
import com.cybage.dtos.FavouriteItemResponse;
import com.cybage.entities.FavouriteItem;
import com.cybage.entities.Item;
import com.cybage.entities.User;

@Service
public class FavouriteListServiceImpl implements IFavouriteListService {

	@Autowired
	FavouriteItemRepository favouriteItemRepository;
	
	@Autowired
	ItemRepository itemRepository;
	
	@Autowired
	ItemServiceImpl itemServiceImpl;
	
	@Autowired
	UserRepository userRepository;

	@Override
	public FavouriteItem addToFavouriteList(int id, String userEmail) {
		FavouriteItem favouriteItem = new FavouriteItem();
		List<FavouriteItem> favouriteItemList = new ArrayList<>();

		User user = userRepository.findByUserEmail(userEmail);

		Item item = itemServiceImpl.findByItemId(id);
		
		favouriteItem.setItem(item);
		favouriteItemList.add(favouriteItem);
		item.getFavouriteItem().addAll(favouriteItemList);
		favouriteItem.setUserMail(user);
		return favouriteItemRepository.save(favouriteItem);
		
	}

	

	@Override
	public void removeFavouriteItem(int id,String userEmail) 
	{
		List<FavouriteItem> favouriteItems = favouriteItemRepository.getFavouriteList(userEmail);
		FavouriteItem item = null;
		for (FavouriteItem item1 : favouriteItems) {
			if (item1.getId() == id) {
				item = item1;
			}
		}
		favouriteItems.remove(item);
		favouriteItemRepository.delete(item);
		favouriteItemRepository.saveAll(favouriteItems);
	}

	@Override
	public void clearFavouriteList(String userEmail) {
		List<FavouriteItem> favouriteList = favouriteItemRepository.getFavouriteList(userEmail);
		favouriteItemRepository.deleteAll(favouriteList);
	}



	@Override
	public List<FavouriteItemResponse> getFavouriteList(String userEmail) {
		List<FavouriteItem> favouriteItems = new ArrayList<>();
		favouriteItems = favouriteItemRepository.getFavouriteList(userEmail);
		FavouriteItemResponse favouriteItemResponse = new FavouriteItemResponse();
		List<FavouriteItemResponse> favouriteItemResponses = new ArrayList<>(); 
		for(int i=0 ; i<favouriteItems.size(); i++) {
			Item item = itemServiceImpl.findByItemId(favouriteItems.get(i).getItem().getItemId());
			favouriteItemResponse = FavouriteItemResponse.toFavouriteItemResponse(item);
			favouriteItemResponses.add(favouriteItemResponse);
		}
		//System.out.println(favouriteItemResponses);
		return favouriteItemResponses;
	}



	@Override
	public FavouriteItem getFavouriteItemIdFromItemId(int itemId) {
		return favouriteItemRepository.getFavouriteItemIdFromItemId(itemId);
	}
	
}