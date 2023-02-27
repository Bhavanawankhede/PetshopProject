package com.cybage.services;

import java.io.File;
import java.io.FileOutputStream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

@Component
public class DiskStorageServiceImpl implements IDiskStorageService {
	@Value("${disk.upload.basepath}")
	private String BASEPATH;

	@Override
	public String store(MultipartFile file) {
		String fileName = file.getOriginalFilename();
		File filePath = new File(BASEPATH, fileName);
		try (FileOutputStream out = new FileOutputStream(filePath)) {
			FileCopyUtils.copy(file.getInputStream(), out);
			return fileName;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
