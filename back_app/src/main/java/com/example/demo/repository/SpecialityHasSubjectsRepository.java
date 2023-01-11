package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.SpecialityHasSubjects;
import com.example.demo.model.doublekey.SpecialityHasSubjectsId;

@Repository
public interface SpecialityHasSubjectsRepository extends JpaRepository<SpecialityHasSubjects, SpecialityHasSubjectsId> {
	
	List<SpecialityHasSubjects> findBySpecialityIdSpeciality(Integer speciality_id_speciality); // Get subjects by speciality
	
	List<SpecialityHasSubjects> findBySubjectsIdSubject(Integer subjects_Id_Subject); // Get subjects by speciality

	
}
