package com.cybage.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.daos.ItemRepository;
import com.cybage.dtos.ItemDto;
import com.cybage.entities.Item;
import com.cybage.entities.ItemCategory;
import com.cybage.exceptions.ItemNotFoundException;

@Service
public class ItemServiceImpl implements IItemService {
	
	@Autowired
	ItemRepository itemRepository;
	
	@Autowired
	ItemDto itemDto;
	
	@Autowired
	IDiskStorageService diskstorageService;

	@Override
	public Item addItem(ItemDto itemDto) {
		List<Item> itemsList = new ArrayList<>();
		Item item = new Item();
		item.setItemId(itemDto.getItemId());
		item.setItemName(itemDto.getItemName());
		item.setCategoryName(itemDto.getCategoryName());
		item.setItemPrice(itemDto.getItemPrice());
		item.setItemDescription(itemDto.getItemDescription());
		item.setItemImage(diskstorageService.store(itemDto.getItemImage()));
		
		itemsList.add(item);
		
		ItemCategory itemCategory = new ItemCategory();
		itemCategory.setItemCategoryId(itemDto.getItemCategoryId());
		item.setItemCategory(itemCategory);
		itemCategory.setItems(itemsList);
		return itemRepository.save(item);
	}

	@Override
	public Item updateItem(ItemDto itemDto, int itemId) {
		Item itemToBeUpdated = itemRepository.findByItemId(itemId);
		itemToBeUpdated.setItemId(itemDto.getItemId());
		itemToBeUpdated.setCategoryName(itemDto.getCategoryName());
		itemToBeUpdated.setItemName(itemDto.getItemName());
		itemToBeUpdated.setItemPrice(itemDto.getItemPrice());
		itemToBeUpdated.setItemDescription(itemDto.getItemDescription());
		itemToBeUpdated.setItemImage(diskstorageService.store(itemDto.getItemImage()));
		return itemRepository.save(itemToBeUpdated);
	}

	@Override
	public Item findByItemId(int itemId) {
		return itemRepository.findById(itemId).orElseThrow(()-> new ItemNotFoundException("Item does not exist from item id "+itemId));
	}

	@Override
	public Item findByItemName(String itemName) {
		return itemRepository.findByItemName(itemName);
	}

	@Override
	public List<Item> findByCategoryName(String categoryName) {
		return itemRepository.findByCategoryName(categoryName);
	}

	@Override
	public void deleteItem(int itemId) {
		itemRepository.deleteById(itemId);
		
	}

	@Override
	public List<Item> getAllItems() {
		return itemRepository.findAll();
	}

	@Override
	public List<Item> getAllItemsByItemCategoryId(int itemCategoryId) {
		return itemRepository.getAllItemsByItemCategoryId(itemCategoryId);
	}

}
