package com.hcl.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.entity.OrderDetail;

@Repository
public interface OrderRepository extends CrudRepository<OrderDetail, Integer> {

	OrderDetail findByOrderId(int orderId);

	List<OrderDetail> findAllByUserName(String userName);

}
