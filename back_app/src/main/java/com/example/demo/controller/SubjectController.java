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

import com.example.demo.model.Subject;
import com.example.demo.service.SubjectService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class SubjectController {

	@Autowired
	private SubjectService subjectService;

	
	@PostMapping("/subject")
	public ResponseEntity<Subject> createSubject (@RequestBody Subject subject) {
		return ResponseEntity.ok().body(this.subjectService.createSubject(subject));

	}

	@PutMapping("subject/{id}")
	public ResponseEntity<Subject> updateSubject(@PathVariable Integer id, @RequestBody Subject subject) {
		subject.setIdSubject(id);
		return ResponseEntity.ok().body(this.subjectService.updateSubject(subject));

	}

	@DeleteMapping("/subject/{id}")
	public HttpStatus deleteSubject(@PathVariable Integer id){
		this.subjectService.deleteSubject(id);
		return HttpStatus.OK;
	}
	
	@GetMapping(value = "/subject/{id}")
	public @ResponseBody ResponseEntity<Subject> getSubject(@PathVariable Integer id){
		return ResponseEntity.ok().body(subjectService.getSubjectById(id));
	}

	@GetMapping(value = "/subject")
	public ResponseEntity<List<Subject>> getAllSubject(){
		return ResponseEntity.ok().body(subjectService.getAllSubject());
	}
	

}
