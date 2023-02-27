package com.cybage.dtos;

import org.springframework.stereotype.Component;

import com.cybage.entities.Item;
import com.cybage.entities.Order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {

	private int id;
	private int itemId;
	private String orderedOn;
	private double amount;
	private String address;
	private String userEmail;
	
	
	
}
