package com.example.demo.model.doublekey;

public class TeacherId {
	

	private Integer userIdUser;
	private Integer idTeacher;
	
	
	public TeacherId() {
		super();
	}


	public TeacherId(Integer userIdUser, Integer idTeacher) {
		super();
		this.userIdUser = userIdUser;
		this.idTeacher = idTeacher;
	}


	public Integer getUserIdUser() {
		return userIdUser;
	}


	public void setUserIdUser(Integer userIdUser) {
		this.userIdUser = userIdUser;
	}


	public Integer getIdTeacher() {
		return idTeacher;
	}


	public void setIdTeacher(Integer idTeacher) {
		this.idTeacher = idTeacher;
	} 
	
	

}
