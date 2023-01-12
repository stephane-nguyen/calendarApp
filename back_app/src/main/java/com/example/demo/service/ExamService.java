package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Exam;
import com.example.demo.repository.ExamRepository;

@Service
@Transactional
public class ExamService {
	@Autowired
	private ExamRepository examRepository;
	
	public Exam createExam(Exam exam) {
		return this.examRepository.save(exam);
	}
	public List<Exam> getAllExam() {
		return this.examRepository.findAll();
	}
	public Exam getExamById(Integer id) {
		return this.examRepository.findById(id).get();
	}
	public void deleteExam(Integer id) {
		this.examRepository.deleteById(id);
	}
	
}
	