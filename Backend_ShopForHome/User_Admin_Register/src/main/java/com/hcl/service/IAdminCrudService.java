package com.hcl.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hcl.entity.User;

@Service
public interface IAdminCrudService {

	boolean add(User user);

	boolean update(User user);

	boolean delete(String userName);

	List<User> display();

	User getDetail(String userName);

}
