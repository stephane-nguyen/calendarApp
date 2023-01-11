package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.SpecialityHasSubjects;
import com.example.demo.model.User;
import com.example.demo.repository.SpecialityHasSubjectsRepository;

@Service
@Transactional
public class SpecialityHasSubjectsService {
	
	@Autowired
	private SpecialityHasSubjectsRepository specialityHasSubjectsRepository;
	
	
	public SpecialityHasSubjects createSpecialityHasSubjectsRepository(SpecialityHasSubjects specialityHasSubjectsRepository){
		return this.specialityHasSubjectsRepository.save(specialityHasSubjectsRepository);
	}
	
	
	public List<SpecialityHasSubjects> getSubjectBySpeciality (Integer id_speciality){
		
		return this.specialityHasSubjectsRepository.findBySpecialityIdSpeciality(id_speciality);
		
	}
	
	public List<SpecialityHasSubjects> getSpecialityBySubject (Integer id_subject){
		
		return this.specialityHasSubjectsRepository.findBySubjectsIdSubject(id_subject);
		
	}
	
	public List<SpecialityHasSubjects> getAllSpecialityHasSubjectsService() {
		return this.specialityHasSubjectsRepository.findAll();
	}
	

}
