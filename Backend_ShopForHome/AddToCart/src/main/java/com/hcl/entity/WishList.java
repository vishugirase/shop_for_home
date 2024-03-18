package com.hcl.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class WishList {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	
	private int wishListId;
	private int productId;
	private int quantity;
	private String userName;
	public int getWishListId() {
		return wishListId;
	}
	public void setWishListId(int wishListId) {
		this.wishListId = wishListId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	@Override
	public String toString() {
		return "WishList [wishListId=" + wishListId + ", productId=" + productId + ", quantity=" + quantity
				+ ", userName=" + userName + "]";
	}
	public WishList(int wishListId, int productId, int quantity, String userName) {
		super();
		this.wishListId = wishListId;
		this.productId = productId;
		this.quantity = quantity;
		this.userName = userName;
	}
	public WishList() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	


}
