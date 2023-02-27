package com.cybage.dtos;

import org.springframework.beans.factory.annotation.Autowired;

import com.cybage.config.UserDetailsService;
import com.cybage.entities.User;
import com.cybage.entities.UserRole;
import com.cybage.jwt.JwtUtility;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
	private String userEmail;
	private String userFirstName;
	private String userLastName;
	private String userPassword;
	private String userPhone;
	private UserRole userRole;
	private String token;
	
	@Autowired
	private JwtUtility jwtUtility;

	@Autowired
	private UserDetailsService userDetailsService;

	public UserDto userDto(User user , String token)
	{
		UserDto userDto = new UserDto();
		userDto.setUserEmail(user.getUserEmail());
		userDto.setUserFirstName(user.getUserFirstName());
		userDto.setUserLastName(user.getUserLastName());
		userDto.setUserPassword(user.getUserPassword());
		userDto.setUserPhone(user.getUserPhone());
		userDto.setUserRole(user.getUserRole());
//		final UserDetails userDetails=userDetailsService.loadUserByUsername(user.getUserEmail());
//		
//		final String token= jwtUtility.generateToken(userDetails);
//		
		userDto.setToken(token);
		return userDto;
		
		
	}
}
