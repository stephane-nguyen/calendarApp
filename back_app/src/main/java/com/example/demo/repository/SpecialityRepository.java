package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Speciality;

public interface SpecialityRepository extends JpaRepository<Speciality, Integer> {

}
