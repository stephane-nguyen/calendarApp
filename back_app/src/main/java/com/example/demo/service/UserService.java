package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User createUser(User user) {
		return this.userRepository.save(user);
	}

	public User updateUser(User user) {

		Optional<User> userDb = this.userRepository.findById(user.getIdUser());
		
		if(userDb.isPresent()) {
			User userUpdate = userDb.get();
			userUpdate.setIdUser(user.getIdUser());
			userUpdate.setFirstname(user.getFirstname());
			userUpdate.setLastname(user.getLastname());
			userUpdate.setEmail(user.getEmail());
			userUpdate.setPassword(user.getPassword());
			userUpdate.setRole(user.getRole());
			userRepository.save(userUpdate);
			
			return userUpdate;
		} else {
			throw new ResourceNotFoundException("Record not found with id : " + user.getIdUser());
		}
		
	}
	public List<User> getAllUser() {
		return this.userRepository.findAll();
	}

	public List<User> getUsersByRole(Integer role) {
		return this.userRepository.findByRole(role);
	}

	public User getUserById(Integer userId) {
		
		Optional<User> userDb = this.userRepository.findById(userId);
		
		if(userDb.isPresent()) {
			return userDb.get();
		} else {
			throw new ResourceNotFoundException("Record not found with id : " + userId);
		}		
	}

	public void deleteUser(Integer userId) {
		Optional<User> userDb = this.userRepository.findById(userId);
		
		if(userDb.isPresent()) {
			this.userRepository.delete(userDb.get());
		} else {
			throw new ResourceNotFoundException("Record not found with id : " + userId);

		}

	}

}
