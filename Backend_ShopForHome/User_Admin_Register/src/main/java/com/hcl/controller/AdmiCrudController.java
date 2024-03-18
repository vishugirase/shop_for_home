package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.entity.User;
import com.hcl.service.IAdminCrudService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/adminCrud")
public class AdmiCrudController {
	
	@Autowired
	IAdminCrudService adminCrudService;
	
	@PostMapping("/add")
	public String add(@RequestBody User user) {
		
		boolean userPrsentOrNot = adminCrudService.add(user);
		
		if(userPrsentOrNot) {
			return "User Added Sucessfully";
		}else {
			return "User Already Present";
		}
			
	}
	@PutMapping("/update")
	public String update(@RequestBody User user) {
		
		boolean userPresentOrNot = adminCrudService.update(user);
		
		if(userPresentOrNot) {
			return "User Updated Sucessfully";
		}
		
		return "User is Not Present Please Add ....";
	}
	
	@DeleteMapping("/delete/{userName}")
	public String delete (@PathVariable String userName) {
		
		boolean userPresentOrNot = adminCrudService.delete(userName);
		
		if(userPresentOrNot) {
			
			return "User Delete Sucessfully";
		}
		
		return "User is Not Present , Please cheak..";
		
		
	}
	
	@GetMapping("/display")
	public List<User> display(){
		
		
		List<User> users = adminCrudService.display();
		
		return users;
		
	}
	
	@GetMapping("/getDetail/{userName}")
	public User getDetail(@PathVariable String userName) {
		
		User user = adminCrudService.getDetail(userName);
		
		return user;	
	}


}
