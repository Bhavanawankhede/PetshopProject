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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.dtos.FavouriteItemResponse;
import com.cybage.entities.FavouriteItem;
import com.cybage.services.FavouriteListServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/favouriteList")
public class FavouriteListController 
{

	@Autowired
	private FavouriteListServiceImpl favouriteListServiceImpl;
	
	@PostMapping("/addToFavouriteList/{id}/{userEmail}")
	public ResponseEntity<FavouriteItem> addToFavouriteList(@PathVariable int id, @PathVariable("userEmail") String userEmail)
	{
		return new ResponseEntity<FavouriteItem>(favouriteListServiceImpl.addToFavouriteList(id , userEmail), HttpStatus.CREATED);
	}
	
	@GetMapping("/getFavouriteList/{userEmail}")
	public ResponseEntity<List<FavouriteItemResponse>> getFavouriteListByUserEmail(@PathVariable String userEmail)
	{
		return new ResponseEntity<List<FavouriteItemResponse>>(favouriteListServiceImpl.getFavouriteList(userEmail), HttpStatus.OK);
	}
	
	@DeleteMapping("/removeFavouriteItem/{id}/{userEmail}")
	public ResponseEntity<String> removeFavouriteItem(@PathVariable int id, @PathVariable String userEmail)
	{
		favouriteListServiceImpl.removeFavouriteItem(id, userEmail);
		return new ResponseEntity<String>("item removed from favourite list", HttpStatus.OK);
	}
	
	@DeleteMapping("/clearFavouriteList/{userEmail}")
	public ResponseEntity<String> clearFavouriteList(@PathVariable String userEmail)
	{
		favouriteListServiceImpl.clearFavouriteList(userEmail);
		return new ResponseEntity<String>("favourite list cleared", HttpStatus.OK);
	}
	
	@GetMapping("/getFavouriteItemIdFromItemId/{itemId}")
	public ResponseEntity<FavouriteItem> getFavouriteItemIdFromItemId(@PathVariable int itemId){
		return new ResponseEntity<>(favouriteListServiceImpl.getFavouriteItemIdFromItemId(itemId),HttpStatus.OK);
	}
	

}
