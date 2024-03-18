package com.hcl.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.entity.WishList;

@Repository
public interface WisListRepository extends CrudRepository<WishList, Integer>{

	List<WishList> findByUserName(String userName);

}
