package com.cybage.dtos;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {
	private int itemCategoryId;
	private int itemId;
	private String categoryName;
	private String itemName;
	private double itemPrice;
	private String itemDescription;
	private MultipartFile itemImage;
}
