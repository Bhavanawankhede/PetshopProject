package com.cybage.controllers;

import javax.annotation.security.PermitAll;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.config.UserDetailsService;
import com.cybage.jwt.JwtRequest;
import com.cybage.jwt.JwtResponse;
import com.cybage.jwt.JwtUtility;


@RestController
@CrossOrigin
@PermitAll
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtility jwtUtility;

	@Autowired
	private UserDetailsService userDetailsService;
	
	@PostMapping("api/authenticate")
	public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest) throws Exception{
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUserEmail(), jwtRequest.getUserPassword()));
		}
			catch(BadCredentialsException e) {
				throw new Exception("INVALID_CREDENTIALS",e);
			}
			final UserDetails userDetails=userDetailsService.loadUserByUsername(jwtRequest.getUserEmail());
			
			final String token= jwtUtility.generateToken(userDetails);
			return new JwtResponse(token);
		
	}

}