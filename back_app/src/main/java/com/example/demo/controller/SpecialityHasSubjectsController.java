package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Speciality;
import com.example.demo.model.SpecialityHasSubjects;
import com.example.demo.model.Subject;
import com.example.demo.service.SpecialityHasSubjectsService;
import com.example.demo.service.SpecialityService;
import com.example.demo.service.SubjectService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class SpecialityHasSubjectsController {

	@Autowired
	private SpecialityHasSubjectsService specialityHasSubjectsService;
	
	@Autowired
	private SubjectService subjectService;
	
	@Autowired
	private SpecialityService specialityService;

	
	@PostMapping("/addsubjecttospeciality")
	public ResponseEntity<SpecialityHasSubjects> createSpecialityHasSubjectsService(@RequestBody SpecialityHasSubjects specialityHasSubjectsService){
		return ResponseEntity.ok().body(this.specialityHasSubjectsService.createSpecialityHasSubjectsRepository(specialityHasSubjectsService));
	}
	
	
	@GetMapping("/subjectsbyspeciality/{id}")
	public ResponseEntity<List<Subject>> getSubjectBySpeciality(@PathVariable Integer idSpeciality){
		List<Subject> list = new ArrayList<>();
		
		this.specialityHasSubjectsService.getSubjectBySpeciality(idSpeciality).forEach(e -> list.add(this.subjectService.getSubjectById(e.getSubjectsIdSubject())));
		
		return ResponseEntity.ok().body(list);
		
	}
	
	@GetMapping("/specialitiesbysubject/{id}")
	public ResponseEntity<List<Speciality>> getSpecialityBySubject(@PathVariable Integer idSubject){
		List<Speciality> list = new ArrayList<>();
		
		this.specialityHasSubjectsService.getSpecialityBySubject(idSubject).forEach(e -> list.add( this.specialityService.getSpecialityById(e.getSpecialityIdSpeciality())));
		
		return ResponseEntity.ok().body(list);
		
	}
	
	@GetMapping("/subjectspeciality")
	public ResponseEntity<List<SpecialityHasSubjects>> getAllSpecialityHasSubjectsService(){
		return ResponseEntity.ok().body(this.specialityHasSubjectsService.getAllSpecialityHasSubjectsService());
	}
	
	

}
