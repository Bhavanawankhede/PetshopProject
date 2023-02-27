package com.cybage.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.dtos.ItemDto;
import com.cybage.entities.Item;
import com.cybage.services.ItemServiceImpl;

@RestController
@RequestMapping("/item")
@CrossOrigin
public class ItemController {
	
	@Autowired
	ItemServiceImpl itemServiceImpl;
	
	@PostMapping("/addItem")
	public ResponseEntity<Item> addItem(ItemDto itemDto) {
		return new ResponseEntity<Item>(itemServiceImpl.addItem(itemDto), HttpStatus.CREATED);
	}
	
	@PutMapping("/updateItem/{itemId}")
	public ResponseEntity<Item> updateItem(ItemDto itemDto,@PathVariable int itemId){
		return new ResponseEntity<Item>(itemServiceImpl.updateItem(itemDto, itemId), HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteItem/{itemId}")
	public ResponseEntity<String> deleteItem(@PathVariable int itemId){
		itemServiceImpl.deleteItem(itemId);
		return new ResponseEntity<String>("Item details delete successfully for item id "+itemId, HttpStatus.OK);
	}
	
	@GetMapping("/getAllItems")
	public ResponseEntity<List<Item>> getAllItems(){
		return new ResponseEntity<List<Item>>(itemServiceImpl.getAllItems(), HttpStatus.OK);
	}
	
	@GetMapping("/findByItemId/{itemId}")
	public ResponseEntity<Item> findByItemId(@PathVariable int itemId){
		return new ResponseEntity<Item>(itemServiceImpl.findByItemId(itemId), HttpStatus.OK);
	}
	
	@GetMapping("/findByItemName/{itemName}")
	public ResponseEntity<Item> findByItemName(@PathVariable String itemName){
		return new ResponseEntity<Item>(itemServiceImpl.findByItemName(itemName), HttpStatus.OK);
	}
	
	@GetMapping("/findByCategoryName/{categoryName}")
	public ResponseEntity<List<Item>> findByCategoryName(@PathVariable String categoryName){
		return new ResponseEntity<List<Item>>(itemServiceImpl.findByCategoryName(categoryName), HttpStatus.OK);
	}
	
	@GetMapping("/getAllItemsByItemCategoryId/{itemCategoryId}")
	public ResponseEntity<List<Item>> getAllItemsByItemCategoryId(@PathVariable int itemCategoryId){
		return new ResponseEntity<List<Item>>(itemServiceImpl.getAllItemsByItemCategoryId(itemCategoryId), HttpStatus.OK);
	}
}
