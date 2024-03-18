package com.hcl.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hcl.entity.OrderDetail;

@Service
public interface IAdminSalesService {

	List<OrderDetail> salesOfMonth();

	

}
