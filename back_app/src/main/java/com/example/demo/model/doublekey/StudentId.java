package com.example.demo.model.doublekey;

public class StudentId {
	

	private Integer userIdUser;
	
	private Integer idStudent;

	public StudentId() {
		super();
	}

	public StudentId(Integer userIdUser, Integer idStudent) {
		super();
		this.userIdUser = userIdUser;
		this.idStudent = idStudent;
	}

	public Integer getuserIdUser() {
		return userIdUser;
	}

	public void setuserIdUser(Integer userIdUser) {
		this.userIdUser = userIdUser;
	}

	public Integer getIdStudent() {
		return idStudent;
	}

	public void setIdStudent(Integer idStudent) {
		this.idStudent = idStudent;
	}
	
	

}
