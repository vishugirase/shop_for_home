package com.hcl.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hcl.entity.OrderDetail;

@Repository
public interface AdminSalesRepository extends CrudRepository<OrderDetail, Integer >{

	List<OrderDetail> findByDateBetween(LocalDate withDayOfMonth, LocalDate now);

}
