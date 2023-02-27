package com.cybage.services;

import java.util.List;

import com.cybage.dtos.UserDto;
import com.cybage.entities.User;

public interface IUserService {
	// Method to add user details
	public User addUser(User user);

	// Method to update user details
	public User updateUser(String userEmail, User user);

	// Method to find user by email
	public User findByUserEmail(String userEmail);

	// Method to get all users details
	public List<User> getAllUser();

	public User fetchUserByEmailAndPassword(String email, String password);

	public UserDto login(User user , String token);

}
