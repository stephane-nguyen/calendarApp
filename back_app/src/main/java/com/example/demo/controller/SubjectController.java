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
<<<<<<< HEAD

	@GetMapping(value = "/subject")
	public ResponseEntity<List<Subject>> getAllSubject() {
		return ResponseEntity.ok().body(subjectService.getAllSubject());
	}

	@GetMapping(value = "/subject/{id}")
	public @ResponseBody ResponseEntity<Subject> getSubject(@PathVariable Integer id) {
		// return ResponseEntity.ok().body(subjectService.getSubjectById(203));

		return ResponseEntity.ok().body(subjectService.getSubjectById(id));

=======
	
	@PostMapping("/subject")
	public ResponseEntity<Subject> createSubject (@RequestBody Subject subject) {
		return ResponseEntity.ok().body(this.subjectService.createSubject(subject));
>>>>>>> student
	}

	@PutMapping("subject/{id}")
<<<<<<< HEAD
	public ResponseEntity<Subject> updateSubject(@PathVariable Integer id, @RequestBody Subject subject) {
		// Subject st = new Subject("Stephanelenul");
		// st.setIdSubject(203);
		// return ResponseEntity.ok().body(this.subjectService.updateSubject(st));

		subject.setIdSubject(id);
		return ResponseEntity.ok().body(this.subjectService.updateSubject(subject));

	}

	@PostMapping("/subject")
	public ResponseEntity<Subject> createSubject(@RequestBody Subject s) {
		// Subject st = new Subject("tefdsqfsqst");
		// return ResponseEntity.ok().body(this.subjectService.createSubject(st));

		return ResponseEntity.ok().body(this.subjectService.createSubject(s));
	}

	@DeleteMapping("/subject/{id}")
	public HttpStatus deleteProduct(@PathVariable Integer id) {
		// this.subjectService.deleteSubject(203);

=======
	public ResponseEntity<Subject> updateSubject(@PathVariable Integer id, @RequestBody Subject subject){
		subject.setIdSubject(id);
		return ResponseEntity.ok().body(this.subjectService.updateSubject(subject));
	}

	@DeleteMapping("/subject/{id}")
	public HttpStatus deleteSubject(@PathVariable Integer id){
>>>>>>> student
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
