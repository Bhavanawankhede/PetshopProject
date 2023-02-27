package com.cybage.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ItemCategoryNotFoundException extends RuntimeException {
	public ItemCategoryNotFoundException(String message) 
	{
		super(message);
	}
}
