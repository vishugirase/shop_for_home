package com.hcl.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.entity.Cart;

@Repository
public interface CartRepository extends CrudRepository<Cart, Integer> {

	List<Cart> findByUserName(String userName);

	Cart findByCartId(int cartId);

}
