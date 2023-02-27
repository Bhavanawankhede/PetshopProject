package com.cybage.dtos;

import com.cybage.entities.Item;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class CartItemResponse {
	private int itemId;
	private String categoryName;
	private String itemName;
	private double itemPrice;
	private String itemDescription;
	private String itemImage;
	
	
	public static CartItemResponse toFavouriteItemResponse(Item item) {
		CartItemResponse cartItemResponse = new CartItemResponse();
		cartItemResponse.setItemId(item.getItemId());
		cartItemResponse.setCategoryName(item.getCategoryName());
		cartItemResponse.setItemDescription(item.getItemDescription());
		cartItemResponse.setItemName(item.getItemName());
		cartItemResponse.setItemImage(item.getItemImage());
		cartItemResponse.setItemPrice(item.getItemPrice());
		return cartItemResponse;
	}



}
