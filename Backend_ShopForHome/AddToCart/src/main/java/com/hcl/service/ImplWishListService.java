package com.hcl.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hcl.entity.WishList;
import com.hcl.repository.WisListRepository;
import com.hcl.to.Product;
import com.hcl.to.WishListTO;

@Service
public class ImplWishListService implements IWishListService {
	
	@Autowired
	WisListRepository wisListRepository;
	
	@Autowired
	RestTemplate restTemplate;

	@Override
	public void add(WishList wishList) {
		
		
		wisListRepository.save(wishList);
		
		
	}

	@Override
	public void delete(int wishListId) {
		
		wisListRepository.deleteById(wishListId);
		
	}

	@Override
	public List<WishListTO> getWishListByUserName(String userName) {
		
		List<WishList> wishList = wisListRepository.findByUserName(userName);
		
		List<WishListTO> wishListTO = new ArrayList<>();
		
		for(WishList i : wishList ) {
			
			int productId = i.getProductId();
			
			Product product =restTemplate.getForObject("http://product-service/product/getProduct/"+productId, Product.class);
			
			WishListTO addTOWishList = new WishListTO(i.getWishListId(),i.getProductId(),product.getProductName(),product.getProductPrice(),product.getProductImg(),i.getQuantity(), userName);
			
			wishListTO.add(addTOWishList);
		}
		
		return wishListTO;
	
	}

}
