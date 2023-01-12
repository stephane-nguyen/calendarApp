package com.example.demo.model;

import java.io.Serializable;

import com.example.demo.model.doublekey.TeacherId;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;

@Entity
@Table(name="teacher")
@IdClass(TeacherId.class)
public class Teacher implements Serializable {
	@Id
	@Column(name ="user_id_user")
	private Integer userIdUser;
	
	@Id
	@Column(name = "id_teacher")
	private Integer idTeacher; 
	
	public Teacher() {
		super();
	}
	
	public Teacher(Integer userIdUser) {
		super();
		this.userIdUser=userIdUser;
	}
	
	public Integer getuserIdUser() {
		return this.userIdUser;
	}

	public void setuserIdUser(Integer userIdUser) {
		this.userIdUser = userIdUser;
	}

	public Integer getidTeacher() {
		return idTeacher;
	}

	public void setidTeacher(Integer idTeacher) {
		this.idTeacher = idTeacher;
	}
	
}
