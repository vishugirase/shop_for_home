package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.hcl.entity.User;
import com.hcl.repository.AdminCrudRepository;

@Service
public class ImplAdminCrudService implements IAdminCrudService{
	
	@Autowired
	AdminCrudRepository adminCrudRepository;

	@Override
	public boolean add(User user) {
		
		User userPresentOrNot = adminCrudRepository.findByUserName(user.getUserName());
		
		if(userPresentOrNot == null) {
			adminCrudRepository.save(user);
			
			return true;
		}
		
		return false;
	}

	@Override
	public boolean update(User user) {
		
		User userPresentOrNot = adminCrudRepository.findByUserName(user.getUserName());
		
		if(userPresentOrNot != null) {
			adminCrudRepository.save(user);
			return true;
			
		}
		
		return false;
	}

	@Override
	public boolean delete(String userName) {
		
		User userPresentOrNot = adminCrudRepository.findByUserName(userName);
		
		if(userPresentOrNot != null) {
			
			adminCrudRepository.delete(userPresentOrNot);
			return true;
		}
		
		
		return false;
	}

	@Override
	public List<User> display() {
		
		List<User> users = (List<User>) adminCrudRepository.findAll();
		
		
		return users;
	}

	@Override
	public User getDetail(String userName) {
		
		User user = adminCrudRepository.findByUserName(userName);
		
		return user;
	}
	
	
}
