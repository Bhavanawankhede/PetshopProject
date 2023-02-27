package com.cybage.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.services.OrderService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;




@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	OrderService orderService;

	@PostMapping("/placeOrder/{userEmail}")
	public ResponseEntity<String> placeOrder(@PathVariable String userEmail , String address,String payment) {
		orderService.placeOrder(userEmail , address,payment);
		return new ResponseEntity<>("Order placed", HttpStatus.OK);
	}
	


}
