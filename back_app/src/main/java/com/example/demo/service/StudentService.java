package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

@Service
@Transactional
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	
	public Student createStudent(Student student){
		return this.studentRepository.save(student);
	}
	
	public void deleteStudent(Integer id) {
		this.studentRepository.deleteByIdStudent(id);
	}
	
	public Student getStudentById(Integer id) {
		return this.studentRepository.findByIdStudent(id);
	}
	
	public List<Student> getAllStudent(){
		return this.studentRepository.findAll();
	}
	
}
