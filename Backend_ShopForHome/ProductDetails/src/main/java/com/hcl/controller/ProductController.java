package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.dto.ProductDTO;
import com.hcl.entity.Product;
import com.hcl.service.IProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	IProductService productService;
	
	@PostMapping("/add")
	public String add(@RequestBody Product product){
		System.out.println("Vishwajeet");	
		boolean productPresent = productService.add(product);
		
		if(productPresent) {
			return "Product Added Sucessfully";
		}else {
			return "Product Already Present";
		}
	}
	
	@PutMapping("/update")
	public String update(@RequestBody Product product){
		
		boolean productUpdate =  productService.update(product);
		
		if(productUpdate) {
			return "Product Updated";
		}
		return "Product Id not Preseant";
		
	}
	
	@DeleteMapping("/delete/{productId}")
	public String delete(@PathVariable long productId) {
		
		boolean productPrsentOrNot = productService.delete(productId);
		
		if(productPrsentOrNot) {
			return "Product Delete Sucessfully";
		}
		
		return "Product Id is not Present please Cheack...";
	}
	
	@GetMapping("/getProduct/{productId}")
	public Product getProduct(@PathVariable long productId) {
		
		Product product =  productService.getProduct(productId);
		
		return product;
		
	}
	
	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts(){
		
		return productService.getAllProducts();
		
	}
	
	@GetMapping("/getLowTOHigh")
	public List<Product> getLowToHigh(){
		
		return productService.getLowToHigh();
	}
	
	@GetMapping("/getHighToLow")
	public List<Product> getHighToLow(){
		
		return productService.getHighToLow();
	}
	
	@GetMapping("/filterPrice")
	public List<Product> filterPrice(int lowprice , int highPrice){
		
		return productService.filterPrice(lowprice,highPrice);
	}
	
	@GetMapping("/KitchenProduct")
	public List<Product> kitchenProduct(){
		
		return productService.kitchenProduct();
	}
	
	@GetMapping("/HomeDecor")
	public List<Product> homeDecor(){
		
		return productService.homeDecor();
	}
	
	@GetMapping("/Furniture")
	public List<Product> Furniture(){
		
		return productService.Furniture();
		
	}
	
}
