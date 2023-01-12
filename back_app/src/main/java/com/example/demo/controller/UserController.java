package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/user")
	public ResponseEntity<User> createUser(@RequestBody User s) {
		return ResponseEntity.ok().body(this.userService.createUser(s));
	}
	
	@PutMapping("user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User user) {
		user.setIdUser(id);
		return ResponseEntity.ok().body(this.userService.updateUser(user));
	}

	@DeleteMapping("/user/{id}")
	public HttpStatus deleteUser(@PathVariable Integer id) {
		this.userService.deleteUser(id);
		return HttpStatus.OK;
	}

	@GetMapping(value = "/user")
	public ResponseEntity<List<User>> getAllUser() {
		return ResponseEntity.ok().body(userService.getAllUser());
	}

	@GetMapping(value = "/user/{id}")
	public @ResponseBody ResponseEntity<User> getUser(@PathVariable Integer id) {
		return ResponseEntity.ok().body(userService.getUserById(id));
	}
	
}
