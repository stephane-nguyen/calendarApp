package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Student;
import com.example.demo.model.doublekey.StudentId;

public interface StudentRepository extends JpaRepository<Student, StudentId> {
	
	
	Student findByIdStudent(Integer id_student);
	
	
	void deleteByIdStudent(Integer id_student);

}
