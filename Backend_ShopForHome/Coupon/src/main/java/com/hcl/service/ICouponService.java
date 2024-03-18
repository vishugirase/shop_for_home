package com.hcl.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hcl.entity.Coupon;

@Service
public interface ICouponService {

	List<Coupon> getCoupon(String userName);

	void setCoupon(String userName);

}
