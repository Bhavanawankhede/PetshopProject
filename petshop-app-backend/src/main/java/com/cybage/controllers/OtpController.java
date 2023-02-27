package com.cybage.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.cybage.config.UserDetailsService;
import com.cybage.entities.AuthRequest;
import com.cybage.jwt.JwtUtility;
import com.cybage.services.OtpService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "api/client/auth/")
@CrossOrigin("http://localhost:3000")
public class OtpController {


	    @Autowired
	    private OtpService otpService;
	    
	    @RequestMapping(value = "requestOtp/{phoneNo}",method = RequestMethod.GET)
	    public Map<String,Object> getOtp(@PathVariable String phoneNo){
	        Map<String,Object> returnMap=new HashMap<>();
	        try{
	          
	            String otp = otpService.generateOtp(phoneNo);
	            returnMap.put("otp", otp);
	            returnMap.put("status","success");
	            returnMap.put("message","Otp sent successfully");
	        }catch (Exception e){
	            returnMap.put("status","failed");
	            returnMap.put("message",e.getMessage());
	        }

	        return returnMap;
	    }

	    @RequestMapping(value = "verifyOtp/",method = RequestMethod.POST)
	    public Map<String,Object> verifyOtp(@RequestBody AuthRequest authenticationRequest){
	        Map<String,Object> returnMap=new HashMap<>();
	        try{
	            //verify otp
	            if(authenticationRequest.getOtp().equals(otpService.getCacheOtp(authenticationRequest.getPhoneNo()))){
	              
	                returnMap.put("status","success");
	                returnMap.put("message","Otp verified successfully");
	                
	                otpService.clearOtp(authenticationRequest.getPhoneNo());
	            }else{
	                returnMap.put("status","success");
	                returnMap.put("message","Otp is either expired or incorrect");
	                
	            }

	        } catch (Exception e){
	            returnMap.put("status","failed");
	            returnMap.put("message",e.getMessage());
	        }

	        return returnMap;
	    }

	 
	}
