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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.model.User;
import com.example.demo.service.StudentService;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@Autowired 
	private UserService userService;
	
	@PostMapping("/student")
	public ResponseEntity<Student> createStudent (@RequestBody Student student) {
		return ResponseEntity.ok().body(this.studentService.createStudent(student));
	}
		
	@DeleteMapping("/student/{id}")
	public HttpStatus deleteStudent(@PathVariable Integer id){
		this.studentService.deleteStudent(id);
		return HttpStatus.OK;
	}

	@GetMapping(value = "/student")
	public ResponseEntity<List<User>> getAllStudent(){
		List<User> studentList = new ArrayList<User>();
		this.studentService.getAllStudent().forEach(student -> studentList.add(this.userService.getUserById(student.getuser_id_user())));
		return ResponseEntity.ok().body(studentList);
	}

}
