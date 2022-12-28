package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
		
		User userUpdate = userDb.get();
				
		userUpdate.setIdUser(user.getIdUser());
		userUpdate.setFirstname(user.getFirstname());
		userUpdate.setLastname(user.getLastname());
		userUpdate.setEmail(user.getEmail());
		userUpdate.setPassword(user.getPassword());
		userRepository.save(userUpdate);
		return userUpdate;
	}

	public List<User> getAllUser() {
		return this.userRepository.findAll();
	}

	public User getUserById(Integer userId) {
		
		return this.userRepository.findById(userId).get();
		
	}

	
	public void deleteUser(Integer id) {
		this.userRepository.deleteById(id);

	}

}
