package com.hcl.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.entity.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

	Product findByProductName(String productName);

	Product findByProductId(long productId);

	List<Product> findByOrderByProductPriceDesc();

	List<Product> findByOrderByProductPriceAsc();

	List<Product> findByProductPriceBetween(int lowprice, int highPrice);

	
	

}
