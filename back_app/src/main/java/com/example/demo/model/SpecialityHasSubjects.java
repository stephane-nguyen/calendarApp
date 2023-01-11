package com.example.demo.model;

import java.io.Serializable;

import com.example.demo.model.doublekey.SpecialityHasSubjectsId;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;

@Entity
@Table(name="speciality_has_subjects")
@IdClass(SpecialityHasSubjectsId.class)
public class SpecialityHasSubjects implements Serializable {
	
	@Id
	@Column(name ="speciality_Id_Speciality")
	private Integer specialityIdSpeciality;
	
	@Id
	@Column(name = "subjects_Id_Subject")
	private Integer subjectsIdSubject;
	
	
	public SpecialityHasSubjects() {
		super();
	}


	public SpecialityHasSubjects(Integer specialityIdSpeciality, Integer subjectsIdSubject) {
		super();
		this.specialityIdSpeciality = specialityIdSpeciality;
		this.subjectsIdSubject = subjectsIdSubject;
	}


	public Integer getSpecialityIdSpeciality() {
		return specialityIdSpeciality;
	}


	public void setSpecialityIdSpeciality(Integer specialityIdSpeciality) {
		this.specialityIdSpeciality = specialityIdSpeciality;
	}


	public Integer getSubjectsIdSubject() {
		return subjectsIdSubject;
	}


	public void setSubjectsIdSubject(Integer subjectsIdSubject) {
		this.subjectsIdSubject = subjectsIdSubject;
	}


	
	
	

}
