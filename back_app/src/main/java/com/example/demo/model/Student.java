package com.example.demo.model;

import java.io.Serializable;

import com.example.demo.model.doublekey.StudentId;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;

@Entity
@Table(name="student")
@IdClass(StudentId.class)
public class Student implements Serializable {
	
	@Id
    @Column(name = "user_id_user")
	private Integer userIdUser;
	
	@Id
	@Column(name = "id_student")
	private Integer idStudent;
	
	public Student() {
		super();
	}
	
	public Student(Integer userIdUser) {
		super();
		this.userIdUser = userIdUser;
	}

	public Integer getuserIdUser() {
		return this.userIdUser;
	}

	public void setuserIdUser(Integer userIdUser) {
		this.userIdUser = userIdUser;
	}

	public Integer getid_student() {
		return idStudent;
	}

	public void setid_student(Integer id_student) {
		this.idStudent = id_student;
	}


	
	
	
	
	
	

}
