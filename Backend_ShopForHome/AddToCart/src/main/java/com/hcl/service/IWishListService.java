package com.hcl.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hcl.entity.WishList;
import com.hcl.to.WishListTO;

@Service
public interface IWishListService {

	void add(WishList wishList);

	void delete(int wishListId);

	List<WishListTO> getWishListByUserName(String userName);

}
