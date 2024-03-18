package com.hcl.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.entity.User;
import com.hcl.repository.UserAdminRegisterRepository;

@Service
public class ImplUserAdminRegister implements IUserAdminRegister{
	
	@Autowired
	UserAdminRegisterRepository userAdminRegisterRepository;	

	@Override
	public boolean register(User user) {
		
		User userPresentOrNot = userAdminRegisterRepository.findByUserName(user.getUserName());
		
		if(userPresentOrNot == null) {
			userAdminRegisterRepository.save(user);
			return true;
			
		}
		
		return false;
	}

	

	@Override
	public User login(String userName, String password) {
		User user = userAdminRegisterRepository.findByUserNameAndPassword(userName , password);
		
		if(user != null) {
			return user;
			
		}
		
		return null;
	}

}
