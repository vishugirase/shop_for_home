package com.hcl.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hcl.entity.OrderDetail;
import com.hcl.repository.OrderRepository;
import com.hcl.to.Coupon;
import com.hcl.to.Product;

@Service
public class ImplOrderService implements IOrderService{
	
	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	RestTemplate restTemplate;
	



	@Override
	public OrderDetail orderThroughCart(String userName , int couponCode) {
		
//		List<CartTO> carts = restTemplate.getForObject("http://Cart-service/cart/getCartByUserName/"+userName, List.class);
//		
//		System.out.println(carts);
//		ObjectMapper obj = new ObjectMapper();
//		
//		OrderDetail order = new OrderDetail();
//		
//		for(CartTO cart :  obj.convertValue(carts, new TypeReference<List<CartTO>>() { })) {
//			
//			System.out.println(cart.getCartId());
//			
//		
//			
//			order.setProductId_quantity(order.getProductId_quantity() + " , " + cart.getProductId() + " -> " +cart.getQuantity());
//			order.setProductName(order.getProductName() + " , " + cart.getProductName());
//			order.setTotalBill(order.getTotalBill() + (cart.getProductPrice() * cart.getQuantity()));
//			
//		}
//		order.setProductId_quantity(order.getProductId_quantity().substring(2));
//		order.setProductName(order.getProductName().substring(2));
//		order.setDate(new Date());
//		order.setUserName(userName);
//		
//		if(couponCode != -1) {
//			int tp = order.getTotalBill();
//			int discount = (int) (tp * 0.25);
//			tp = tp-discount;
//			order.setSellingPrice(tp);
//			order.setDiscount(discount);
//			
//			couponRepository.save(new Coupon(couponCode,userName,true));
//		}else {
//			order.setSellingPrice(order.getTotalBill());
//		}
//		
//		if(order.getTotalBill() >= 1000) {
//			
//			couponRepository.save(new Coupon(-1, userName, false));
//			
//			order.setGotDiscountForNextPurchased(true);
//			
//			
//		}
//		
//		orderRepository.save(order);
//		
		return null;
		
	}



	@Override
	public List<OrderDetail> salesReport() {
		
		
		List<OrderDetail> report = (List<OrderDetail>) orderRepository.findAll();
		
		
		return report;
	}



	@Override
	public void placedOrder(int productId , String userName) {


		Product product =restTemplate.getForObject("http://product-service/product/getProduct/"+productId, Product.class);
		
//		List<Coupon> coupon = (List<Coupon>) restTemplate.getForObject("http://Coupon-service/coupon/getCoupon/" + userName, Coupon.class);
		
		OrderDetail orderDetail = new OrderDetail();
		
		List<Coupon> coupon = new ArrayList<>();
		
		for(Coupon i : coupon) {
			
			if(i.getUsed().equals("not used")) {
				
				Date date = new Date();
				
				orderDetail.setDate(date);
				
				int tp = product.getProductPrice();
				
				int discount =  (int) (tp * 0.25);
				
				int sp = tp - discount;
				
				orderDetail.setDiscount(discount);
				orderDetail.setSellingPrice(tp);
				orderDetail.setTotalBill(sp);
				
				return;
				
			}
		}
		Date date = new Date();
		orderDetail.setQuantity(1);
		orderDetail.setUserName(userName);
		orderDetail.setProductName(product.getProductName());
		orderDetail.setProductImg(product.getProductImg());
		orderDetail.setProductId(productId);
		orderDetail.setDate(date);
		int tp = product.getProductPrice();
		int sp = tp;
		orderDetail.setDiscount(0);
		orderDetail.setSellingPrice(tp);
		orderDetail.setTotalBill(sp);
		
		orderRepository.save(orderDetail);
		
		
	}



	@Override
	public List<OrderDetail> getorder(String userName) {
		
		List<OrderDetail> order = orderRepository.findAllByUserName(userName);
		
		return order;
	}
	



	
	


}
