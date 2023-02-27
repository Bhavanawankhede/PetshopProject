package com.cybage.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cybage.entities.ItemCategory;

@Repository
public interface ItemCategoryRepository extends JpaRepository<ItemCategory, Integer> {
	//Method to find item category by item category id
	public ItemCategory findByItemCategoryId(int itemCategoryId);
	
	//Method to find item category by item category name
	public ItemCategory findByItemCategoryName(String itemCategoryName);
}
