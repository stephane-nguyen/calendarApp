package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="speciality")
public class Speciality implements Serializable {
	@Id
    @Column(name = "id_speciality")
	private Integer idSpeciality;
	
	@Column(name = "name_speciality")
	private String nameSpeciality;
	
	public Speciality() {
		super();
	}
	
	public Speciality(String nameSpeciality) {
		this.nameSpeciality = nameSpeciality;
	}

	public Integer getIdSpeciality() {
		return idSpeciality;
	}

	public void setIdSpeciality(Integer idSpeciality) {
		this.idSpeciality = idSpeciality;
	}

	public String getNameSpeciality() {
		return nameSpeciality;
	}

	public void setNameSpeciality(String nameSpeciality) {
		this.nameSpeciality = nameSpeciality;
	}
	
	@Override
	public String toString() {
		return "Speciality [id_speciality=" + idSpeciality + ", name_speciality=" + nameSpeciality + "]";
	}

}
