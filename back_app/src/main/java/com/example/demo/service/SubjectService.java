package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Subject;
import com.example.demo.repository.SubjectRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
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

		if (subjectDb.isPresent()) {
			Subject subjectUpdate = subjectDb.get();
			subjectUpdate.setIdSubject(subject.getIdSubject());
			subjectUpdate.setNameSubject(subject.getNameSubject());
			subjectRepository.save(subjectUpdate);

			return subjectUpdate;
		} else {
			throw new ResourceNotFoundException("Record not found with id : " + subject.getIdSubject());
		}
	}

	public List<Subject> getAllSubject() {
		return this.subjectRepository.findAll();
	}

	public Subject getSubjectById(Integer subjectId) {
		Optional<Subject> subjectDb = this.subjectRepository.findById(subjectId);

		if (subjectDb.isPresent()) {
			return subjectDb.get();
		} else {
			throw new ResourceNotFoundException("Record not found with id : " + subjectId);
		}
	}

	public void deleteSubject(Integer subjectId) {
		Optional<Subject> subjectDb = this.subjectRepository.findById(subjectId);

		if (subjectDb.isPresent()) {
			this.subjectRepository.delete(subjectDb.get());

		} else {
			throw new ResourceNotFoundException("Record not found with id : " + subjectId);

		}

	}

}
