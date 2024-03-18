package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.entity.Coupon;
import com.hcl.service.ICouponService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/coupon")

public class CuponController {
	
	@Autowired
	ICouponService couponService;
	
	@GetMapping("/getCoupon/{userName}")
	public List<Coupon> getCoupon(@PathVariable String userName) {
		
		
		return couponService.getCoupon(userName);
		
		
	}
	
	@PostMapping("/setCoupon/{userName}")
	public String  setCoupon(@PathVariable String userName) {
		
		couponService.setCoupon(userName);
		
		return "Coupon Added Sucessfully";
		
	}


}
