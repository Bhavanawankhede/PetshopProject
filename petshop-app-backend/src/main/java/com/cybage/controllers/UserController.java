package com.cybage.controllers;

import java.util.List;

import javax.annotation.security.PermitAll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.config.UserDetailsService;
import com.cybage.dtos.UserDto;
import com.cybage.entities.User;
import com.cybage.jwt.JwtUtility;
import com.cybage.services.UserServiceImpl;
@EnableGlobalMethodSecurity(prePostEnabled = true,jsr250Enabled = true)
@RestController
@CrossOrigin
@PermitAll
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserServiceImpl userServiceImpl;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtility jwtUtility;

	@Autowired
	private UserDetailsService userDetailsService;
	
	//@RolesAllowed("ROLE_ADMIN")
	@PostMapping("/addUser")
	public ResponseEntity<User> addUser(@RequestBody User user) {
		return new ResponseEntity<User>(userServiceImpl.addUser(user), HttpStatus.CREATED);
	}
	//@RolesAllowed("ROLE_ADMIN")
	@PutMapping("/updateUser/{userEmail}")
	public ResponseEntity<User> updateUser(@PathVariable String userEmail, @RequestBody User user) {
		return new ResponseEntity<User>(userServiceImpl.updateUser(userEmail, user), HttpStatus.OK);
	}
	
	@GetMapping("/findByUserEmail/{userEmail}")
	public ResponseEntity<User> findByUserEmail(@PathVariable String userEmail) {
		return new ResponseEntity<User>(userServiceImpl.findByUserEmail(userEmail), HttpStatus.OK);
	}
	//@RolesAllowed("ROLE_ADMIN")
	@GetMapping("/getAllUser")
	public ResponseEntity<List<User>> getAllUser() {
		return new ResponseEntity<List<User>>(userServiceImpl.getAllUser(), HttpStatus.OK);
	}

//	@PostMapping("/userLogin")
//	public ResponseEntity<User> login(@RequestBody User user) {
//		user = userServiceImpl.login(user);
//		if (user != null) {
//			return new ResponseEntity<User>(user, HttpStatus.OK);
//		} else {
//			return null;
//		}
//	}
	@GetMapping("/findByUserPhone/{userPhone}")
	public ResponseEntity<User> findByUserPhone(@PathVariable String userPhone) {
		return new ResponseEntity<User>(userServiceImpl.findByUserPhone(userPhone),HttpStatus.OK);
	}
	
	@PutMapping("/editPassword/{userPhone}")
	public ResponseEntity<String> editFood(@RequestBody User user, @PathVariable String userPhone) {
		userServiceImpl.updatePassword(userPhone, user);
		return new ResponseEntity<>("Password updated", HttpStatus.CREATED);
	}
	
	
	@PostMapping("/authenticate")
	public ResponseEntity<UserDto> login(@RequestBody User user) throws Exception{
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUserEmail(), user.getUserPassword()));
		}
			catch(BadCredentialsException e) {
				throw new Exception("INVALID_CREDENTIALS",e);
			}
			final UserDetails userDetails=userDetailsService.loadUserByUsername(user.getUserEmail());
			
			String token= jwtUtility.generateToken(userDetails);
			if (user != null) {
				return new ResponseEntity<UserDto>(userServiceImpl.login(user , token), HttpStatus.OK);
			} else {
				return null;
			}
			
	}

}
