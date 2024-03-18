package com.hcl.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hcl.dto.ProductDTO;
import com.hcl.entity.Product;

@Service
public interface IProductService {

	boolean add(Product product);

	boolean update(Product product);

	boolean delete(long productId);

	Product getProduct(long productId);

	List<Product> getAllProducts();

	List<Product> getLowToHigh();

	List<Product> getHighToLow();

	List<Product> filterPrice(int lowprice, int highPrice);

	List<Product> kitchenProduct();

	List<Product> homeDecor();

	List<Product> Furniture();

}
