package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.entity.WishList;
import com.hcl.service.IWishListService;
import com.hcl.to.WishListTO;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/wishList")
public class WishListController {
	@Autowired
	IWishListService wishListService;
	
	
	@PostMapping("/add")
	public String add(@RequestBody WishList wishList) {
		
		wishListService.add(wishList);
		
		return "Product Added into wishList";
	}
	
	@DeleteMapping("/delete /{wishListId}")
	public String delete(@PathVariable int wishListId) {
		
		wishListService.delete(wishListId);
		return "Delete Product from wishList";
		
	}
	
	@GetMapping("/getWishListByUserName/{userName}")
	public List<WishListTO> getWishListByUserName(@PathVariable String userName){
		
		return wishListService.getWishListByUserName(userName);
		
	}

}
