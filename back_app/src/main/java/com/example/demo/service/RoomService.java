package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.Room;
import com.example.demo.repository.RoomRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class RoomService {
	@Autowired
	private RoomRepository roomRepository;
	
	public Room createRoom(Room room) {
		return this.roomRepository.save(room);
	}
	public List<Room> getAllRoom(){
		return this.roomRepository.findAll();
	}
	
	public void deleteRoom(Integer id) {
		this.roomRepository.deleteById(id);
	}
}
