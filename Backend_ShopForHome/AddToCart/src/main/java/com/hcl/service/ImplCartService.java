package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.entity.Cart;
import com.hcl.repository.CartRepository;

@Service
public class ImplCartService implements ICartService{
	
	@Autowired
	CartRepository cartRepository;

	@Override
	public void addProduct(Cart cart) {
		
		cartRepository.save(cart);
		
	}

	@Override
	public void deleteProduct(int cartId) {
		
		cartRepository.deleteById(cartId);
		
	}

	@Override
	public List<Cart> getAllCarts() {
		
		return (List<Cart>) cartRepository.findAll();
		
		
	}

	@Override
	public List<Cart> getCartByUserName(String userName) {
		List<Cart> user = cartRepository.findByUserName(userName);
	
		return user;
	}

	@Override
	public void getQuantity(int cartId, int quantity) {
		
		Cart cart = cartRepository.findByCartId(cartId);
		
		if(cart != null) {
			cart.setQuantity(quantity);
			cartRepository.save(cart);
		}
		
		
	}

}
