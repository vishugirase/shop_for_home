package com.hcl.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.entity.Product;
import com.hcl.repository.ProductRepository;

@Service
public class ImplProductService implements IProductService {

	@Autowired
	ProductRepository productRepository;

	@Override
	public boolean add(Product product) {
		
		Product productPresent = productRepository.findByProductId(product.getProductId());
		
		if(productPresent == null) {
			productRepository.save(product);
			return true;
			
		}
		else {
			return false;
    	}

		//productRepository.save(product);
		//return true;
	}

	@Override
	public boolean update(Product product) {
		
		Product productPresent = productRepository.findByProductId(product.getProductId());
		
		if(productPresent != null) {
			productRepository.save(product);
			return true;
		}
		return false;
		

		
	}

	@Override
	public boolean delete(long productId) {
		
		Product product = productRepository.findByProductId(productId);
		
		if(product != null) {
			productRepository.delete(product);
			return true;
			
		}
		
		return false;
	}

	@Override
	public Product getProduct(long productId) {
		
		Product product = productRepository.findByProductId(productId);
		
		
		return product;
	}

	@Override
	public List<Product> getAllProducts() {
		
		List<Product> products = (List<Product>) productRepository.findAll();
		
		return products;
	}

	@Override
	public List<Product> getLowToHigh() {
		
		List<Product> products = productRepository.findByOrderByProductPriceAsc();
		
		return products;
	}

	@Override
	public List<Product> getHighToLow() {
		
		List<Product> products = productRepository.findByOrderByProductPriceDesc();
		
		return products;
	}

	@Override
	public List<Product> filterPrice(int lowprice, int highPrice) {
		
		List<Product> products = productRepository.findByProductPriceBetween(lowprice,highPrice);
		
		return products;
	}

	@Override
	public List<Product> kitchenProduct() {
		
		List<Product> products = (List<Product>) productRepository.findAll();
		
		List<Product> kitchenProduct = new ArrayList<>();
		
		if(products != null) {
			
			for(Product product : products) {
				System.out.println(" hii" +product.getProductName());
				if(product.getCategory().equals("Kitchen")) {
					kitchenProduct.add(product);
					System.out.println(" hii" +product.getProductName());
				}
				
			}
		}
		
		
		return kitchenProduct;
	}

	@Override
	public List<Product> homeDecor() {
		
		List<Product> products = (List<Product>) productRepository.findAll();
		
		List<Product> homeDecor = new ArrayList<>();
		
		if(products != null) {
			
			for(Product product : products) {
				System.out.println(" hii" +product.getProductName());
				if(product.getCategory().equals("Home Decor")) {
					homeDecor.add(product);
					System.out.println(" hii" +product.getProductName());
				}
				
			}
		}
		
		
		return homeDecor;
	}

	@Override
	public List<Product> Furniture() {
		
List<Product> products = (List<Product>) productRepository.findAll();
		
		List<Product> furniture = new ArrayList<>();
		
		if(products != null) {
			
			for(Product product : products) {
				System.out.println(" hii" +product.getProductName());
				if(product.getCategory().equals("Furniture")) {
					furniture.add(product);
					System.out.println(" hii" +product.getProductName());
				}
			}
		}
		
		
		return furniture;
	}
	
	

}
