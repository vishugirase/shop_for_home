package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.entity.Coupon;
import com.hcl.repository.CouponRepository;

@Service
public class ImplCouponService implements ICouponService {

	@Autowired
	CouponRepository couponRepository;
	
	@Override
	public List<Coupon> getCoupon(String userName) {
		
		List<Coupon> coupons =  couponRepository.findByuserName(userName);
		 
		return coupons;
		
		
	}

	@Override
	public void setCoupon(String userName) {
		
		Coupon coupon = new Coupon();
		
		coupon.setUserName(userName);
		
		couponRepository.save(coupon);
	
	}

}
