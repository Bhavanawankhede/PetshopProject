package com.cybage.services;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.cybage.dtos.ItemDto;
import com.cybage.entities.Item;

public interface IItemService {
	// Method to add item
	public Item addItem(ItemDto itemDto);

	// Method to update item
	public Item updateItem(ItemDto itemDto, int itemId);

	// Method to delete item
	public void deleteItem(int itemId);

	// Method to find item by item id
	public Item findByItemId(int itemId);

	// Method to find item by item by item name
	public Item findByItemName(String itemName);

	// Method to find list of items by item category name
	public List<Item> findByCategoryName(String itemCategoryName);

	// Method to find list of all items
	public List<Item> getAllItems();

	// Method to find list of items by item category id
	@Query(value = "select * from item where item_category_id=?1", nativeQuery = true)
	public List<Item> getAllItemsByItemCategoryId(int itemCategoryId);
}
