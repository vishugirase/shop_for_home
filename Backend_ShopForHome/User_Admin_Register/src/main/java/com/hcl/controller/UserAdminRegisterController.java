package com.hcl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.entity.User;
import com.hcl.service.IUserAdminRegister;

@RestController

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/user")
public class UserAdminRegisterController {
	
	@Autowired
	IUserAdminRegister userAdminService;
	
	@PostMapping("/register")
	public String register(@RequestBody User user) {
		
		boolean userPresentOrNot =  userAdminService.register(user);
		
		if(userPresentOrNot) {
			return "Register Sucessfully..";
		}
		
		return "User Name is Already Present";	
	}
	
	@GetMapping("/login/{userName}/{password}")
	public User login(@PathVariable String userName ,@PathVariable String password) {
		
		User user = userAdminService.login(userName , password);
		
	return user;
	}
}
