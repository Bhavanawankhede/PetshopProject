package com.cybage.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.cybage.services.FoodMenuService;
import com.cybage.services.ItemServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/trans")
public class MenuController {
	@Autowired
	ItemServiceImpl itemServiceImpl;

    private final FoodMenuService foodMenuService;

    public MenuController(FoodMenuService foodMenuService) {
        this.foodMenuService = foodMenuService;
    }

    @GetMapping(path = "")
    public ResponseEntity<List<String>> getMenu() {
        List<String> sushi = foodMenuService.getSushi();
        return new ResponseEntity<>(sushi, HttpStatus.OK);
    }
    @GetMapping(path="/get")
	public ResponseEntity<List<String>> getAllItems(){
    	List<String> sushi = foodMenuService.getAllItems();
        return new ResponseEntity<>(sushi, HttpStatus.OK);
		
	}
}
