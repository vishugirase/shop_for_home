package com.hcl.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.entity.Coupon;

@Repository
public interface CouponRepository extends CrudRepository<Coupon, Integer> {

	

	List<Coupon> findByuserName(String userName);

}
