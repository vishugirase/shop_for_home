package com.hcl.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hcl.entity.Cart;

@Service
public interface ICartService {

	void addProduct(Cart cart);

	void deleteProduct(int cartId);

	List<Cart> getAllCarts();

	List<Cart> getCartByUserName(String userName);

	void getQuantity(int cartId, int quantity);

}
