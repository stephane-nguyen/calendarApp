package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "subject")
public class Subject implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "id_subject")
	private Integer idSubject;

	@Column(name = "name_subject")
	private String nameSubject;


	public Subject() {
		super();
	}

	public Subject(String nameSubject) {

		this.nameSubject = nameSubject;
	}

	public Integer getIdSubject() {
		return this.idSubject;
	}

	public void setIdSubject(Integer idSubject) {
		this.idSubject = idSubject;
	}

	public String getNameSubject() {
		return this.nameSubject;
	}

	public void setNameSubject(String nameSubject) {
		this.nameSubject = nameSubject;
	}

	@Override
	public String toString() {
		return "Subject [idSubject=" + idSubject + ", nameSubject=" + nameSubject + "]";
	}

}
