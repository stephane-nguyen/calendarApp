package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Teacher;
import com.example.demo.model.User;
import com.example.demo.service.TeacherService;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class TeacherController {
	
	@Autowired
	private TeacherService teacherService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/teacher")
	public ResponseEntity<Teacher> createTeacher(@RequestBody Teacher teacher){
		return ResponseEntity.ok().body(this.teacherService.createTeacher(teacher));
	}
	
	@DeleteMapping("/teacher/{id}")
	public HttpStatus deleteTeacher(@PathVariable Integer id) {
		this.teacherService.deleteTeacher(id);
		return HttpStatus.OK;
	}
	
	@GetMapping(value = "/teacher/{id}")
	public @ResponseBody ResponseEntity<User> getTeacherById(@PathVariable Integer id){

		return ResponseEntity.ok().body(this.userService.getUserById(this.teacherService.getByIdTeacher(3).getuserIdUser()));
	}
	
	
	@GetMapping(value = "/teacher")
	public ResponseEntity<List<User>> getAllTeacher(){
		List<User> teacherList = new ArrayList<User>();
		this.teacherService.getAllTeacher().forEach(teacher -> teacherList.add(this.userService.getUserById(teacher.getuserIdUser())));
		
		return ResponseEntity.ok().body(teacherList);
	}
	
}
