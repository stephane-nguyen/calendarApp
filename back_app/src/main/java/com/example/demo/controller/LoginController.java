package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.LoginService;
import com.example.demo.service.UserService;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class LoginController {
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/login")
	public ResponseEntity<User> login(HttpServletResponse response) {
	//@RequestParam String username, @RequestParam String password,  HttpServletResponse response
	//@RequestParam String username, @RequestParam String password, 
	String username ="tata123@gmail.com";
	String password = "123";
	return ResponseEntity.ok().body(this.loginService.loginUser(username, password, response));
	}
	
	@PutMapping("/logout")
	public ResponseEntity<String>logout(HttpServletResponse response){
		return ResponseEntity.ok().body(this.loginService.logoutUser(response));	
	}
}
