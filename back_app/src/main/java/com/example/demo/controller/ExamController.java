package com.example.demo.controller;

import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.Date;
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

import com.example.demo.model.Exam;
import com.example.demo.service.ExamService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class ExamController {
	@Autowired
	private ExamService examService;
	
	@GetMapping("/exam")
	public ResponseEntity<List<Exam>> getAllExam(){
		return ResponseEntity.ok().body(examService.getAllExam());
	}
	@PostMapping("/exam")
	public ResponseEntity<Exam> createExam(@RequestBody Exam exam){
		//@RequestBody Exam exam
		//Date date = new Date();
		//Exam exam = new Exam(date, 1, 2, 3);
		return ResponseEntity.ok().body(this.examService.createExam(exam));
	}
	@DeleteMapping("/exam/{id}")
	public HttpStatus deleteExam(@PathVariable Integer id) {
		this.examService.deleteExam(id);
		return HttpStatus.OK;
	}
}
