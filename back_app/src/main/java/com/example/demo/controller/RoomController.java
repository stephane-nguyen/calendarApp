package com.example.demo.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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

import com.example.demo.model.Exam;
import com.example.demo.model.Room;
import com.example.demo.service.ExamService;
import com.example.demo.service.RoomService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class RoomController {
	@Autowired
	private RoomService roomService;
	@Autowired
	private ExamService examService;
	
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
	@GetMapping("/findRoom")
	public ResponseEntity<List<Integer>> getAvaibleRoom(){
		//@RequestBody String startDate, @RequestBody String c 
		String startDate = "2022-12-12 09:00:00";
		String endDate = "2022-12-12 10:00:00";
		
		List<Exam> allExam = examService.getAllExam();
		List<Integer> filterRoom = new ArrayList();
		List<Room> allRoom = roomService.getAllRoom();
		SimpleDateFormat formatter = new SimpleDateFormat("dd-M-yyyy hh:mm:ss");
		Date s1 = null;
		Date e1 = null;
		
		try {
			e1 = formatter.parse(startDate);
			s1 = formatter.parse(endDate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		for (Exam exam : allExam) {
			Date e2 = exam.getStartDate();
			Date s2 = exam.getEndDate();
		    if(s1.before(s2) && e1.after(s2) ||
		    	       s1.before(e2) && e1.after(e2) ||
		    	       s1.before(s2) && e1.after(e2) ||
		    	       s1.after(s2) && e1.before(e2) ){
		    	filterRoom.add(exam.getRoom_id_room());}
		    }
//		for (Room room : allRoom) {
//			if(room.getIdRoom().equals(e1))
//		}
		return ResponseEntity.ok().body(filterRoom);
	}
	

}