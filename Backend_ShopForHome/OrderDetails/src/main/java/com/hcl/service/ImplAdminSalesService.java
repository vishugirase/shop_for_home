package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.entity.OrderDetail;
import com.hcl.repository.AdminSalesRepository;


@Service
public class ImplAdminSalesService implements IAdminSalesService {
	
	@Autowired
	AdminSalesRepository adminSalesRepository;

	@Override
	public List<OrderDetail> salesOfMonth() {
		
		
		List<OrderDetail> billOfMonth = adminSalesRepository.findByDateBetween(java.time.LocalDate.now().withDayOfMonth(1),java.time.LocalDate.now());
		return billOfMonth;
	}

}
