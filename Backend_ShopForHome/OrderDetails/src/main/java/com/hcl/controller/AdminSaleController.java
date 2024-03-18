package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.entity.OrderDetail;
import com.hcl.service.IAdminSalesService;

@RestController
@RequestMapping("/sales")
@CrossOrigin
public class AdminSaleController {
	
	@Autowired
	IAdminSalesService adminSalesService;
	
	@GetMapping("/ofMonth")
	public List<OrderDetail> salesOfMonth(){
		
	 List<OrderDetail> report =  adminSalesService.salesOfMonth();
	 
	 return report;
	}

}
