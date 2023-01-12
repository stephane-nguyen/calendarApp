package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
	

	List<User> findByRole(Integer role);
	
	List<User> findAll();
	
	
}
	
