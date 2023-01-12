package com.example.demo.model;

import java.io.Serializable;
import java.util.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "exam")
public class Exam implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "id_exam")
	private Integer id_exam;
	@Column(name = "start_date")
	private Date startDate;
	@Column(name = "subjects_id_subjects")
	private Integer subjects_id_subjects;
	@Column(name = "room_id_room")
	private Integer room_id_room;

	public Exam() {
		super();
	}

	public Exam(Date startDate, Integer subjects_id_subjects, Integer room_id_room) {
		this.startDate = startDate;

		this.subjects_id_subjects = subjects_id_subjects;
		this.room_id_room = room_id_room;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Integer getSubjects_id_subjects() {
		return subjects_id_subjects;
	}

	public void setSubjects_id_subjects(Integer subjects_id_subjects) {
		this.subjects_id_subjects = subjects_id_subjects;
	}

	public Integer getRoom_id_room() {
		return room_id_room;
	}

	public void setRoom_id_room(Integer room_id_room) {
		this.room_id_room = room_id_room;
	}

	public Integer getId_exam() {
		return id_exam;
	}

	public void setId_exam(Integer id_exam) {
		this.id_exam = id_exam;
	}

	@Override
	public String toString() {
		return "Exam [idExam=" + id_exam + ", subject_id_subject=" + subjects_id_subjects + ", room_id_room="
				+ room_id_room + ", start_date=" + startDate + "]";
	}
}