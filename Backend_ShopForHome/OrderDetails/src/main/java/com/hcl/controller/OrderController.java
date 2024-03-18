package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.entity.OrderDetail;
import com.hcl.service.IOrderService;
import com.hcl.to.ProductAnduserTO;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	IOrderService orderService;
	
	@GetMapping("/orderThroughCart/{userName}/{couponCode}")
	public OrderDetail orderThroughCart(@PathVariable String userName , @PathVariable int couponCode) {
		
		return orderService.orderThroughCart(userName ,couponCode);
	}
	
	@GetMapping("/salesReport")
	public List<OrderDetail> salesReport(){
		
		return orderService.salesReport();
	}
	
	
	@PostMapping("/placedOrder")
	public String placedOrder(@RequestBody ProductAnduserTO productAnduserTO) {
		
		orderService.placedOrder(productAnduserTO.getProductId(),productAnduserTO.getUserName());
		
		return "Order Placed Sucessfully";
	}
	
	@GetMapping("/getBill/{userName}")
	public List<OrderDetail> getOrder(@PathVariable String userName){
		
	List<OrderDetail> order = 	orderService.getorder(userName);
	
	return order;
		
	}
	
}
