package com.hcl.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.entity.User;

@Repository
public interface UserAdminRegisterRepository extends CrudRepository<User, String>{

	User findByUserName(String userName);

	User findByUserNameAndPassword(String userName, String password);

}
