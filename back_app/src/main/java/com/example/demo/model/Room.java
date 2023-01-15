package com.example.demo.model;

import java.io.Serializable;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="room")
public class Room implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name="id_room")
	private Integer id_room;
	@Column(name = "capacity")
	private Integer capacity;
		
	public Room() {
		super();
	}
	public Room( Integer capcatity) {
		this.capacity = capcatity;
	}
	public Integer getIdRoom(){
		return this.id_room;
	}
	public void setIdRoom(Integer id){
		this.id_room = id;
	}
	public Integer getCapacity(){
		return this.capacity;
	}
	public void setCapacity(Integer capacity){
		this.capacity = capacity;
	}
	
	@Override
	public String toString() {
		return "Room [id_room=" + id_room + ", capacity=" + capacity + "]";
	}
	
	
}

