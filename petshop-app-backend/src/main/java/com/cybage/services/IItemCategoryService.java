package com.cybage.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.cybage.entities.ItemCategory;

public interface IItemCategoryService {
	// Method to add item category
	public ItemCategory addItemCategory(MultipartFile itemCategoryImage, String itemCategoryName,
			String itemCategoryDescription);

	// Method to update item category
	public ItemCategory updateItemCategory(MultipartFile itemCategoryImage, String itemCategoryName,
			String itemCategoryDescription, int itemCategoryId);

	// Method to delete item category
	public void deleteItemCategory(int itemCategoryId);

	// Method to find item category by item category id
	public ItemCategory findByItemCategoryId(int itemCategoryId);

	// Method to find item category by item category name
	public ItemCategory findByItemCategoryName(String itemCategoryName);
	
	//Method to get list all item categories
	public List<ItemCategory> getAllItemCategory();
}
