package com.cybage.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cybage.daos.ItemCategoryRepository;
import com.cybage.entities.ItemCategory;
import com.cybage.exceptions.ItemCategoryNotFoundException;

@Service
public class ItemCategoryServiceImpl implements IItemCategoryService {
	
	@Autowired
	ItemCategoryRepository itemCategoryRepository;
	
	@Autowired
	IDiskStorageService diskstorageService;

	@Override
	public ItemCategory addItemCategory(MultipartFile itemCategoryImage, String itemCategoryName,
			String itemCategoryDescription) {
		
		ItemCategory itemCategory = new ItemCategory();
		itemCategory.setItemCategoryImage(diskstorageService.store(itemCategoryImage));
		itemCategory.setItemCategoryName(itemCategoryName);
		itemCategory.setItemCategoryDescription(itemCategoryDescription);
		return itemCategoryRepository.save(itemCategory);
	}

	@Override
	public ItemCategory updateItemCategory(MultipartFile itemCategoryImage, String itemCategoryName,
			String itemCategoryDescription, int itemCategoryId) {
		
		ItemCategory itemCategoryToBeUpdated = itemCategoryRepository.findById(itemCategoryId).orElseThrow(()-> new ItemCategoryNotFoundException("Item category does not exist for item category id " + itemCategoryId));
		itemCategoryToBeUpdated.setItemCategoryImage(diskstorageService.store(itemCategoryImage));
		itemCategoryToBeUpdated.setItemCategoryName(itemCategoryName);
		itemCategoryToBeUpdated.setItemCategoryDescription(itemCategoryDescription);
		return itemCategoryRepository.save(itemCategoryToBeUpdated);
	}

	@Override
	public void deleteItemCategory(int itemCategoryId) {
		itemCategoryRepository.deleteById(itemCategoryId);
		
	}

	@Override
	public ItemCategory findByItemCategoryId(int itemCategoryId) {
		return itemCategoryRepository.findById(itemCategoryId).orElseThrow(()-> new ItemCategoryNotFoundException("Item category does not exist for item category id " + itemCategoryId));
	}

	@Override
	public ItemCategory findByItemCategoryName(String itemCategoryName) {
		return itemCategoryRepository.findByItemCategoryName(itemCategoryName);
	}

	@Override
	public List<ItemCategory> getAllItemCategory() {
		return itemCategoryRepository.findAll();
	}

	
}
