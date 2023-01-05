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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping(value = "/user")
	public ResponseEntity<List<User>> getAllUser(){
		return ResponseEntity.ok().body(userService.getAllUser());
	}
	
	@GetMapping(value = "/user/{id}")
	public @ResponseBody ResponseEntity<User> getUser(@PathVariable Integer id){
		
//		System.out.println(id);
		return ResponseEntity.ok().body(userService.getUserById(id));
		
	}
	
	@PutMapping("user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Integer id, User user){
//		User st = new User("tefdsqfsqst", "tesssfdsqf", "tota@gmail.com", "fdqfdsqfsdq");
//		st.setIdUser(1);
//		return ResponseEntity.ok().body(this.userService.updateUser(st));
				
		user.setIdUser(1);
		return ResponseEntity.ok().body(this.userService.updateUser(user));
		
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> createUser (User s) {
		//User st = new User("tefdsqfsqst", "tesssfdsqf", "tata@gmail.com", "fdqfdsqfsdq");
		//return ResponseEntity.ok().body(this.userService.createUser(st));

		return ResponseEntity.ok().body(this.userService.createUser(s));
		


	}
	
	@DeleteMapping("/user/{id}")
	public HttpStatus deleteProduct(@PathVariable Integer id){
//		this.userService.deleteUser(1);

		this.userService.deleteUser(id);
		return HttpStatus.OK;
	}

}
