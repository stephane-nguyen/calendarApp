package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Room;
import com.example.demo.repository.RoomRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
@Transactional
public class RoomService {
	@Autowired
	private RoomRepository roomRepository;

	public Room createRoom(Room room) {
		return this.roomRepository.save(room);
	}

	public List<Room> getAllRoom() {
		return this.roomRepository.findAll();
	}

	public void deleteRoom(Integer room_id) {

		Optional<Room> room_db = this.roomRepository.findById(room_id);

		if (room_db.isPresent()) {
			this.roomRepository.delete(room_db.get());
		} else {

			throw new ResourceNotFoundException("Record not found with id : " + room_id);

		}

	}
}
