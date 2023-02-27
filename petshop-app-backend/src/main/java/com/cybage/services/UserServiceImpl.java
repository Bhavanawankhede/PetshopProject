package com.cybage.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.daos.UserRepository;
import com.cybage.dtos.UserDto;
import com.cybage.entities.User;
import com.cybage.entities.UserRole;
import com.cybage.exceptions.UserNotFoundException;


@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	UserRepository userRepository;
	
	

	@Override
	public User addUser(User user) {
		user.setUserRole(UserRole.CUSTOMER);
		return userRepository.save(user);
	}

	@Override
	public User updateUser(String userEmail, User user) {
		userRepository.findById(userEmail)
				.orElseThrow(() -> new UserNotFoundException("User does not exist for email id " + userEmail));
		return userRepository.save(user);

	}

	@Override
	public User findByUserEmail(String userEmail) {
		return userRepository.findById(userEmail)
				.orElseThrow(() -> new UserNotFoundException("User does not exist for email id " + userEmail));

	}

	@Override
	public List<User> getAllUser() {
		return userRepository.findAll();
	}

	@Override
	public User fetchUserByEmailAndPassword(String email, String password) {
		return userRepository.findByUserEmailAndUserPassword(email, password);
	}

	public UserDto login(User user , String token) {
		User user1 = new User();
		user1 = userRepository.findByUserEmailAndUserPassword(user.getUserEmail(), user.getUserPassword());
		UserDto userDto = new UserDto();
		return userDto.userDto(user1 , token);
	}


	public User findByUserPhone(String userPhone) {
		return userRepository.findByUserPhone(userPhone);
	}

	public void updatePassword(String userPhone, User user) {
		User oldUser = userRepository.findByUserPhone(userPhone);
		oldUser.setUserEmail(user.getUserEmail());
		oldUser.setUserFirstName(user.getUserFirstName());
		oldUser.setUserLastName(user.getUserLastName());
		oldUser.setUserPhone(user.getUserPhone());
		oldUser.setUserRole(user.getUserRole());
		oldUser.setUserPassword(user.getPassword());
		
		userRepository.save(oldUser);
		
	}

	

	

	

}
