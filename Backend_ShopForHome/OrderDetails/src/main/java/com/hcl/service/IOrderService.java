package com.hcl.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hcl.entity.OrderDetail;
import com.hcl.to.BillTO;

@Service
public interface IOrderService {



	OrderDetail orderThroughCart(String userName , int couponCode);

	List<OrderDetail> salesReport();

	void placedOrder(int productId , String userName);

	List<OrderDetail> getorder(String userName);



}
