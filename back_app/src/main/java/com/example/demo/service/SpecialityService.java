package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.exception.ResourceNotFoundException;
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
		Optional<Speciality> specialityDb = this.specialityRepository.findById(speciality.getIdSpeciality());
		
		if(specialityDb.isPresent()) {
			Speciality specialityUpdate = specialityDb.get();
			
			specialityUpdate.setIdSpeciality(speciality.getIdSpeciality());
			specialityUpdate.setNameSpeciality(speciality.getNameSpeciality());
			
			return specialityUpdate;
			
		} else {
			throw new ResourceNotFoundException("Record not found with id : " + speciality.getIdSpeciality());
		}	
	}
	
	public List<Speciality> getAllSpeciality(){
		return this.specialityRepository.findAll();
	}

	public Speciality getSpecialityById(Integer specialityId) {
		Optional<Speciality> specialityDb = this.specialityRepository.findById(specialityId);
		
		if(specialityDb.isPresent()) {
			return specialityDb.get();
			
		} else {
			throw new ResourceNotFoundException("Record not found with id : " + specialityId);
		}
	}
	
	public void deleteSpeciality(Integer specialityId) {
		Optional<Speciality> specialityDb = this.specialityRepository.findById(specialityId);
		
		if(specialityDb.isPresent()) {
			this.specialityRepository.delete(specialityDb.get());
		} else {
			throw new ResourceNotFoundException("Record not found with id : " + specialityId);
		}
	}
}
