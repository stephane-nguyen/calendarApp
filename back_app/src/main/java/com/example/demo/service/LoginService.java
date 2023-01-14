package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class LoginService {
	@Autowired
	private UserRepository userRepository;
	
	public User loginUser(String email, String password, HttpServletResponse response) {
		
		List<User> usersFound = this.userRepository.findByEmail(email);
		User userLog = usersFound.stream()
				  .filter(user -> password.equals(user.getPassword()))
				  .findFirst()
				  .orElse(null);
		if(userLog != null) {
			response.addCookie(new Cookie("authentificated", "true"));
			return userLog;
		}
		else {
			System.out.println(usersFound);
			return null;
		}
		
//		return null;
	}
	
	
	public String logoutUser(HttpServletResponse response) {
		Cookie cookie = new Cookie("authentificated", null);
	    cookie.setMaxAge(0); // delete cookie
	    response.addCookie(cookie);
	    return "logout";
	}
}
