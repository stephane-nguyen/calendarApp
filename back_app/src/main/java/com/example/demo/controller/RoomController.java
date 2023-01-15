package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Room;
import com.example.demo.service.RoomService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class RoomController {
	@Autowired
	private RoomService roomService;
	
	@GetMapping("/room")
	public ResponseEntity<List<Room>> getAllRoom(){
		return ResponseEntity.ok().body(roomService.getAllRoom());
	}
	
	@PostMapping("/room")
	public ResponseEntity<Room> createRoom(@RequestBody Room room){
		System.out.println(room.toString());
		return ResponseEntity.ok().body(this.roomService.createRoom(room));
	}
	@DeleteMapping("/room/{id}")
	public HttpStatus deleteRoom(@PathVariable Integer id) {
		this.roomService.deleteRoom(id);
		return HttpStatus.OK;
	}
}
