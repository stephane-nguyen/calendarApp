package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Teacher;
import com.example.demo.model.doublekey.StudentId;

public interface TeacherRepository extends JpaRepository<Teacher, StudentId>{
	
	Teacher findByIdTeacher(Integer id_teacher);

	void deleteByIdTeacher(Integer id_teacher);
	

}
