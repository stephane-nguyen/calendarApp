package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Exam;

public interface ExamRepository extends  JpaRepository<Exam, Integer>{

}
