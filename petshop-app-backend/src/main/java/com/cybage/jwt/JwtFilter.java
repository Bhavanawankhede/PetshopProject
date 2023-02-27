package com.cybage.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.cybage.config.UserDetailsService;

import io.jsonwebtoken.ExpiredJwtException;

@Component
public class JwtFilter extends OncePerRequestFilter {

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private JwtUtility jwtUtility;

	@Override
	protected void doFilterInternal(HttpServletRequest httpServletrequest, HttpServletResponse httpServletresponse,
			FilterChain filterChain) throws ServletException, IOException {

		String authorization = httpServletrequest.getHeader("Authorization");

		String userName = null;
		String token = null;
		// JWT Token is in the form "Bearer token". Remove Bearer word and get
		// only the Token
		if (null != authorization && authorization.startsWith("Bearer")) {
			token = authorization.substring(7);
			userName = jwtUtility.getUsernameFromToken(token);
		}

		// Once we get the token validate it.
		if (null != userName && SecurityContextHolder.getContext().getAuthentication() == null) {

			UserDetails userDetails = this.userDetailsService.loadUserByUsername(userName);

			// if token is valid configure Spring Security to manually set
			// authentication
			if (jwtUtility.validateToken(token, userDetails)) {

				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());
				usernamePasswordAuthenticationToken
						.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletrequest));
				// After setting the Authentication in the context, we specify
				// that the current user is authenticated. So it passes the
				// Spring Security Configurations successfully.
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
		}
		filterChain.doFilter(httpServletrequest, httpServletresponse);
	}

}