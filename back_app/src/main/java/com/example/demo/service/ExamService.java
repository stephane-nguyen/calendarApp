package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Exam;
import com.example.demo.repository.ExamRepository;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor

public class ExamService {
	@Autowired
	private ExamRepository examRepository;

	public Exam createExam(Exam exam) {
		return this.examRepository.save(exam);
	}

	public List<Exam> getAllExam() {
		return this.examRepository.findAll();
	}

	public Exam getExamById(Integer exam_id) {
		Optional<Exam> productDb = this.examRepository.findById(exam_id);

		if (productDb.isPresent()) {
			return productDb.get();
		} else {
			throw new ResourceNotFoundException("Record not found with id : " + exam_id);
		}

	}

	public void deleteExam(Integer exam_id) {
		Optional<Exam> examDb = this.examRepository.findById(exam_id);

		if (examDb.isPresent()) {
			this.examRepository.delete(examDb.get());

		} else {
			throw new ResourceNotFoundException("Record not found with id : " + exam_id);
		}

	}

}
