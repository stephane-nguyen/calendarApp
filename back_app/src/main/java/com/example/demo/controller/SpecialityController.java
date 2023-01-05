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

import com.example.demo.model.Speciality;
import com.example.demo.service.SpecialityService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class SpecialityController {
	
	
	@Autowired
	private SpecialityService specialityService;
	
	@PostMapping("/speciality")
	public ResponseEntity<Speciality> createSpeciality(Speciality s){
		//Declaration to test functionality
		//Speciality newspe = new Speciality("Génie Mathématique");
		//return ResponseEntity.ok().body(this.specialityService.createSpeciality(newspe));
		return ResponseEntity.ok().body(this.specialityService.createSpeciality(s));
	}
	
	@GetMapping("/speciality")
	public ResponseEntity<List<Speciality>> getAllSpeciality(){
		return ResponseEntity.ok().body(this.specialityService.getAllSpeciality());
	}
	
	@PutMapping("/speciality/{id}")
	public ResponseEntity<Speciality> updateSpeciality(@PathVariable Integer id, Speciality spe){
		//Declaration to test functionality
		//Speciality newspe = new Speciality("Génie physique ");
		//newspe.setIdSpeciality(202);
		//return ResponseEntity.ok().body(this.specialityService.updateSpeciality(newspe));
		spe.setIdSpeciality(id);
		return ResponseEntity.ok().body(this.specialityService.updateSpeciality(spe));
	}
	
	@DeleteMapping("/speciality/{id}")
	public HttpStatus deleteSpeciality(@PathVariable Integer id) {
		//to test
		//this.specialityService.deleteSpeciality(202);
		this.specialityService.deleteSpeciality(id);
		return HttpStatus.OK;
	}
	@GetMapping("/speciality/{id}")
	public @ResponseBody ResponseEntity<Speciality> getSpeciality(@PathVariable Integer id){
		//to test
		//return ResponseEntity.ok().body(this.specialityService.getSpeciality(152));
		return ResponseEntity.ok().body(this.specialityService.getSpeciality(id));
	}
	
	
}
