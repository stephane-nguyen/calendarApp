package com.example.demo.service;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.model.Room;
import com.example.demo.repository.RoomRepository;

@ExtendWith(MockitoExtension.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class RoomServiceTest {
    static Room Room;

    @Mock
    private RoomRepository roomRepository;
    private RoomService roomService;

    @BeforeEach
    void setUp() {
        roomService = new RoomService(roomRepository);
        Room = new Room(250);
    }

    @AfterAll
    public void endTest() {
        System.out.println("End of the Test");
    }

    @Test
    void testCreateRoom() {
        roomService.createRoom(Room);
        verify(roomRepository).save(Room);
    }

    @Test
    void testGetAllRoom() {
        roomService.getAllRoom();
        verify(roomRepository).findAll();
    }
}