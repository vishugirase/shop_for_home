package com.hcl.service;

import org.springframework.stereotype.Service;

import com.hcl.entity.User;

@Service
public interface IUserAdminRegister {

	boolean register(User user);

	User login(String userName , String password);

}
