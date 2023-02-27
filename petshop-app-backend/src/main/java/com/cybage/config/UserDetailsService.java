package com.cybage.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cybage.daos.UserRepository;
import com.cybage.entities.User;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

	@Autowired
	UserRepository userRepository;
	@Override
	public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
		User user=userRepository.findByUserEmail(userEmail);
		if(user!=null)
		{
			return user;
		}
		return null;
	}

}
