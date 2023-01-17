package com.example.demo.service;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.model.Speciality;
import com.example.demo.repository.SpecialityRepository;

@ExtendWith(MockitoExtension.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class SpecialityServiceTest {
    static Speciality Speciality;

    @Mock
    private SpecialityRepository specialityRepository;
    private SpecialityService specialityService;

    @BeforeEach
    void setUp() {
        specialityService = new SpecialityService(specialityRepository);
        Speciality = new Speciality("Scientifique");
    }

    @AfterAll
    public void endTest() {
        System.out.println("End of the Test");
    }

    @Test
    void testCreateSpeciality() {
        specialityService.createSpeciality(Speciality);
        verify(specialityRepository).save(Speciality);
    }

    @Test
    void testGetAllSpeciality() {
        specialityService.getAllSpeciality();
        verify(specialityRepository).findAll();
    }

    // @Test
    // @Disabled
    // void testDeleteSpeciality() {
    // SpecialityService.deleteSpeciality(Speciality.getIdSpeciality());
    // verify(SpecialityRepository).deleteById(Speciality.getIdSpeciality());
    // }

    // @Test
    // @Disabled
    // void testGetSpecialityById() {
    // SpecialityService.getSpecialityById(Speciality.getIdSpeciality());
    // verify(SpecialityRepository).findById(Speciality.getIdSpeciality());
    // }

    // @Test
    // @Disabled
    // void testUpdateSpeciality() {
    // SpecialityService.updateSpeciality(Speciality);
    // verify(SpecialityRepository).save(Speciality);
    // }
}
