package com.hcl.controller;

import java.util.ArrayList;
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
import org.springframework.web.client.RestTemplate;
import com.hcl.entity.Cart;
import com.hcl.service.ICartService;
import com.hcl.to.CartTO;
import com.hcl.to.Product;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	ICartService cartService;
	
	@Autowired
	RestTemplate restTemplate;
	
	@PostMapping("/addProduct")
	public String addProduct(@RequestBody Cart cart) {
		
		cartService.addProduct(cart);
		
		return "Product Added into cart sucessfully...";
	}
	
	@DeleteMapping("/deleteProduct /{cartId}")
	public String deleteProduct(@PathVariable int cartId) {
		
		cartService.deleteProduct(cartId);
		
		return "Product in the card is deleted sucessfully...";
	}
	
	@GetMapping("/getAllCart")
	public List<Cart> getAllCarts(){
		
		return cartService.getAllCarts();
	}
	
	@GetMapping("/getCartByUserName/{userName}")
	
	public List<CartTO> getCartByUserName(@PathVariable String userName){
		
		List<Cart>  carts = cartService.getCartByUserName(userName);
	
		List<CartTO> cartTo = new ArrayList<>();	
		
		for(Cart cart : carts) {
			
			int productId = cart.getProductId();
			
			Product product =restTemplate.getForObject("http://product-service/product/getProduct/"+productId, Product.class);
			
			
			
			CartTO cartToAdd = new CartTO(cart.getCartId(),cart.getProductId(),product.getProductName(),product.getProductPrice(),product.getProductImg(), cart.getQuantity(),cart.getUserName());
			
			cartTo.add(cartToAdd);
			
		}
		return cartTo;
	}
	
	@PutMapping("/changeQuantity/{cartId}/{quantity}")
	public String changeQuantity(@PathVariable int cartId , @PathVariable int quantity) {
		
		cartService.getQuantity(cartId, quantity);
		
		return "Quantity Added Sucessfuly";
		
	}

}
