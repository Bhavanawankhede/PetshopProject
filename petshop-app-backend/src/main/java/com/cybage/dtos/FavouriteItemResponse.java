package com.cybage.dtos;

import com.cybage.entities.Item;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class FavouriteItemResponse {
	private int itemId;
	private String categoryName;
	private String itemName;
	private double itemPrice;
	private String itemDescription;
	private String itemImage;
	
	public static FavouriteItemResponse toFavouriteItemResponse(Item item) {
		FavouriteItemResponse favouriteItemResponse = new FavouriteItemResponse();
		favouriteItemResponse.setItemId(item.getItemId());
		favouriteItemResponse.setCategoryName(item.getCategoryName());
		favouriteItemResponse.setItemDescription(item.getItemDescription());
		favouriteItemResponse.setItemName(item.getItemName());
		favouriteItemResponse.setItemImage(item.getItemImage());
		favouriteItemResponse.setItemPrice(item.getItemPrice());
		return favouriteItemResponse;
	}

}
