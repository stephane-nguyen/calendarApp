package com.example.demo.service;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.model.Subject;
import com.example.demo.repository.SubjectRepository;

@ExtendWith(MockitoExtension.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class SubjectServiceTest {
    static Subject subject;

    @Mock
    private SubjectRepository subjectRepository;
    private SubjectService subjectService;

    @BeforeEach
    void setUp() {
        subjectService = new SubjectService(subjectRepository);
        subject = new Subject("Histoire");
    }

    @AfterAll
    public void endTest() {
        System.out.println("End of the Test");
    }

    @Test
    void testCreateSubject() {
        subjectService.createSubject(subject);
        verify(subjectRepository).save(subject);
    }

    @Test
    void testGetAllSubject() {
        subjectService.getAllSubject();
        verify(subjectRepository).findAll();
    }

    // @Test
    // @Disabled
    // void testDeleteSubject() {
    // subjectService.deleteSubject(subject.getIdSubject());
    // verify(subjectRepository).deleteById(subject.getIdSubject());
    // }

    // @Test
    // @Disabled
    // void testGetSubjectById() {
    // subjectService.getSubjectById(subject.getIdSubject());
    // verify(subjectRepository).findById(subject.getIdSubject());
    // }

    // @Test
    // @Disabled
    // void testUpdateSubject() {
    // subjectService.updateSubject(subject);
    // verify(subjectRepository).save(subject);
    // }
}
