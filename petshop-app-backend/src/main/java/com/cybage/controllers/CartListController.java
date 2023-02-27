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

import com.cybage.dtos.CartItemResponse;
import com.cybage.entities.CartItem;
import com.cybage.services.CartListServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/cartList")
public class CartListController 
{
	@Autowired
	private CartListServiceImpl cartListServiceImpl;
	
	@PostMapping("/addToCartList/{id}/{userEmail}")
	public ResponseEntity<CartItem> addToCartList(@PathVariable int id, @PathVariable("userEmail") String userEmail)
	{
		return new ResponseEntity<CartItem>(cartListServiceImpl.addToCartList(id , userEmail), HttpStatus.CREATED);
	}
	
	@GetMapping("/getCartList/{userEmail}")
	public ResponseEntity<List<CartItemResponse>> getCartListByUserEmail(@PathVariable String userEmail)
	{
		return new ResponseEntity<List<CartItemResponse>>(cartListServiceImpl.getCartList(userEmail), HttpStatus.OK);
	}
	
	@DeleteMapping("/removeCartItem/{id}/{userEmail}")
	public ResponseEntity<String> removeCartItem(@PathVariable int id, @PathVariable String userEmail)
	{
		cartListServiceImpl.removeCartItem(id, userEmail);
		return new ResponseEntity<String>("Cart item removed successfully", HttpStatus.OK);
	}
	
	@DeleteMapping("/clearCartList/{userEmail}")
	public ResponseEntity<String> clearCartList(@PathVariable String userEmail)
	{
		cartListServiceImpl.clearCartList(userEmail);
		return new ResponseEntity<String>("cart list cleared", HttpStatus.OK);
	}
	
	@GetMapping("/getCartItemIdFromItemId/{itemId}")
	public ResponseEntity<CartItem> getCartItemIdFromItemId(@PathVariable int itemId){
		return new ResponseEntity<CartItem>(cartListServiceImpl.getCartItemIdFromItemId(itemId), HttpStatus.OK);
	}
	


}
