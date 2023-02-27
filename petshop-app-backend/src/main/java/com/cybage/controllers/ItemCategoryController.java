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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cybage.entities.ItemCategory;
import com.cybage.services.ItemCategoryServiceImpl;

@RestController
@RequestMapping("/itemCategory")
@CrossOrigin
public class ItemCategoryController {
	@Autowired
	ItemCategoryServiceImpl itemCategoryServiceImpl;
	
	@PostMapping("/addItemCategory")
	public ResponseEntity<String> addItemCategory(@RequestParam("itemCategoryImage") MultipartFile file,
			@RequestParam("itemCategoryName") String itemCategoryName,@RequestParam("itemCategoryDescription") String itemCategoryDescription) {
		itemCategoryServiceImpl.addItemCategory(file, itemCategoryName,itemCategoryDescription);
		return new ResponseEntity<String>("Item category details added!", HttpStatus.OK);
	}
	
	@PutMapping("/updateItemCategory/{itemCategoryId}")
	public ResponseEntity<ItemCategory> updateItemCategory(@PathVariable int itemCategoryId,
			@RequestParam("itemCategoryImage") MultipartFile file, @RequestParam("itemCategoryName") String itemCategoryName, @RequestParam("itemCategoryDescription") String itemCategoryDescription) {
		return new ResponseEntity<ItemCategory>(itemCategoryServiceImpl.updateItemCategory(file, itemCategoryName, itemCategoryDescription, itemCategoryId),
				HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteItemCategory/{itemCategoryId}")
	public ResponseEntity<String> deleteItemCategory(@PathVariable int itemCategoryId) {
		itemCategoryServiceImpl.deleteItemCategory(itemCategoryId);
		return new ResponseEntity<String>("Item category details deleted successfully for item category id " + itemCategoryId,
				HttpStatus.OK);
	}
	
	@GetMapping("/findByItemCategoryId/{itemCategoryId}")
	public ResponseEntity<ItemCategory> findByItemCategoryId(@PathVariable int itemCategoryId){
		return new ResponseEntity<ItemCategory>(itemCategoryServiceImpl.findByItemCategoryId(itemCategoryId), HttpStatus.OK);
	}
	
	@GetMapping("/findByItemCategoryName/{itemCategoryName}")
	public ResponseEntity<ItemCategory> findByItemCategoryName(@PathVariable String itemCategoryName){
		return new ResponseEntity<ItemCategory>(itemCategoryServiceImpl.findByItemCategoryName(itemCategoryName), HttpStatus.OK);
	}
	
	@GetMapping("/getAllItemCategory")
	public ResponseEntity<List<ItemCategory>> getAllItemCategory(){
		return new ResponseEntity<List<ItemCategory>>(itemCategoryServiceImpl.getAllItemCategory(), HttpStatus.OK);
	}

}
