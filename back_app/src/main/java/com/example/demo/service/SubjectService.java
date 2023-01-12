package com.example.demo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Subject;
import com.example.demo.repository.SubjectRepository;
@Service
@Transactional
public class SubjectService {
	
	@Autowired
	private SubjectRepository subjectRepository;

	public Subject createSubject(Subject subject) {
		return this.subjectRepository.save(subject);
	}

	public Subject updateSubject(Subject subject) {
		Optional<Subject> subjectDb = this.subjectRepository.findById(subject.getIdSubject());
		Subject subjectUpdate = subjectDb.get();
		subjectUpdate.setIdSubject(subject.getIdSubject());
		subjectUpdate.setNameSubject(subject.getNameSubject());
		subjectRepository.save(subjectUpdate);
		
		return subjectUpdate;
	}
	
	public void deleteSubject(Integer id) {
		this.subjectRepository.deleteById(id);
	}

	public List<Subject> getAllSubject() {
		return this.subjectRepository.findAll();
	}

	public Subject getSubjectById(Integer subjectId) {
		return this.subjectRepository.findById(subjectId).get();
	}

}
