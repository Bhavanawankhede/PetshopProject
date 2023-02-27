package com.cybage.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cybage.entities.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
	//Method to find item by item id
	public Item findByItemId(int itemId);
	
	//Method to find item by item by item name
	public Item findByItemName(String itemName);
	
	//Method to find list of items by item category name
	public List<Item> findByCategoryName(String categoryName);
	
	//Method to find list of items by item category id
	@Query(value =  "select * from item where item_category_id=?1" , nativeQuery = true)
	public List<Item> getAllItemsByItemCategoryId(int itemCategoryId);
}
