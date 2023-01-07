package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="student")
public class Student implements Serializable {
	
	@Id
    @GeneratedValue(strategy = GenerationType.TABLE)
	
    @Column(name = "user_id_user")
	private Integer user_id_user;
	@Column(name = "id_student")
	private String id_student;
	
	public Student() {
		super();
	}
	

	public Student(Integer user_id_user) {
		super();
		this.user_id_user = user_id_user;
		
	}

	public Integer getuser_id_user() {
		return this.user_id_user;
	}

	public void setuser_id_user(Integer user_id_user) {
		this.user_id_user = user_id_user;
	}

	public String getid_student() {
		return id_student;
	}

	public void setid_student(String id_student) {
		this.id_student = id_student;
	}


	
	
	
	
	
	

}
