package com.example.demo.service;

import static org.mockito.Mockito.verify;

import java.util.Date;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.model.Exam;
import com.example.demo.repository.ExamRepository;

@ExtendWith(MockitoExtension.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ExamServiceTest {
    static Exam exam;

    @Mock
    private ExamRepository ExamRepository;
    private ExamService ExamService;

    @BeforeEach
    void setUp() {
        ExamService = new ExamService(ExamRepository);
        exam = new Exam(new Date(), new Date(), 1, 2);
    }

    @AfterAll
    public void endTest() {
        System.out.println("End of the Test");
    }

    @Test
    void testCreateExam() {
        ExamService.createExam(exam);
        verify(ExamRepository).save(exam);
    }

    @Test
    void testGetAllExam() {
        ExamService.getAllExam();
        verify(ExamRepository).findAll();
    }
}