package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Teacher;
import com.example.demo.repository.TeacherRepository;
import jakarta.transaction.Transactional;

@Service 
@Transactional
public class TeacherService {
	
	@Autowired
	private TeacherRepository teacherRepository;
	
	public Teacher createTeacher(Teacher teacher) {
		return this.teacherRepository.save(teacher);
	}
	
	public void deleteTeacher(Integer idTeacher) {
		this.teacherRepository.deleteByIdTeacher(idTeacher);
	}
	
	public Teacher getByIdTeacher(Integer idTeacher) {
		return this.teacherRepository.findByIdTeacher(idTeacher);
	}
	
	public List<Teacher> getAllTeacher(){
		return this.teacherRepository.findAll();
	}
	
}
