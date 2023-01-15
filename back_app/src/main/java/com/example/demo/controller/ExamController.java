package com.example.demo.controller;

<<<<<<< HEAD

=======
>>>>>>> feature-exam
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
import com.example.demo.model.Subject;
import com.example.demo.service.ExamService;
import com.example.demo.service.SubjectService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class ExamController {
	@Autowired
	private ExamService examService;
	@Autowired
	private SubjectService subjectService;

	@GetMapping("/exam")
	public ResponseEntity<List<Exam>> getAllExam() {
		return ResponseEntity.ok().body(examService.getAllExam());
	}

	@PostMapping("/exam")
	public ResponseEntity<Exam> createExam(@RequestBody Exam exam) {
		return ResponseEntity.ok().body(this.examService.createExam(exam));
	}
	@GetMapping("/examSubject/{idSubjectEx}")
	public ResponseEntity<String> getSubjectExam(@PathVariable Integer idSubjectEx){
		return ResponseEntity.ok().body(subjectService.getSubjectById(idSubjectEx).getNameSubject());
	}

	@GetMapping("/examSubject/{idSubjectExam}")
	public ResponseEntity<String> getSubjectExam(@PathVariable Integer idSubjectExam) {
		return ResponseEntity.ok().body(subjectService.getSubjectById(idSubjectExam).getNameSubject());
	}

	@DeleteMapping("/exam/{id}")
	public HttpStatus deleteExam(@PathVariable Integer id) {	
		this.examService.deleteExam(id);
		return HttpStatus.OK;
	}
}