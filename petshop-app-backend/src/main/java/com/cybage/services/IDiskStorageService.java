package com.cybage.services;

import org.springframework.web.multipart.MultipartFile;

public interface IDiskStorageService {
	String store(MultipartFile file);
}
