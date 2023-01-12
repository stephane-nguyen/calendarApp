package com.example.demo.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="teacher")
public class Teacher implements Serializable {
	@Id
	@Column(name ="user_id_user")
	private Integer user_id_user;
	@Column(name = "id_teacher")
	private String id_teacher; 
	
	public Teacher() {
		super();
	}
	
	public Teacher(Integer user_id_user) {
		super();
		this.user_id_user=user_id_user;
	}
	
	public Integer getuser_id_user() {
		return this.user_id_user;
	}

	public void setuser_id_user(Integer user_id_user) {
		this.user_id_user = user_id_user;
	}

	public String getid_teacher() {
		return id_teacher;
	}

	public void setid_teacher(String id_teacher) {
		this.id_teacher = id_teacher;
	}
	
}
