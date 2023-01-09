package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Speciality;
import com.example.demo.repository.SpecialityRepository;

@Service
@Transactional
public class SpecialityService {
	
	@Autowired
	private SpecialityRepository specialityRepository;
	
	public Speciality createSpeciality(Speciality speciality){
		return this.specialityRepository.save(speciality);
	}
	
	public Speciality updateSpeciality(Speciality speciality) {
		Speciality specialityUpdated = this.specialityRepository.findById(speciality.getIdSpeciality()).get();
		specialityUpdated.setIdSpeciality(speciality.getIdSpeciality());
		specialityUpdated.setNameSpeciality(speciality.getNameSpeciality());
		
		return specialityUpdated;
	}
	
	public void deleteSpeciality(Integer id) {
		this.specialityRepository.deleteById(id);
	}
	
	public Speciality getSpeciality(Integer id) {
		return this.specialityRepository.findById(id).get();
	}
	
	public List<Speciality> getAllSpeciality(){
		return this.specialityRepository.findAll();
	}
	
}
