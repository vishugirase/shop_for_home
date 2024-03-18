package com.hcl.to;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class WishListTO {
	
	private int wishListId;
	private int productId;
	private String productName;
	private int productPrice;
	private String productImg;
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
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(int productPrice) {
		this.productPrice = productPrice;
	}
	public String getProductImg() {
		return productImg;
	}
	public void setProductImg(String productImg) {
		this.productImg = productImg;
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
		return "WishListTO [wishListId=" + wishListId + ", productId=" + productId + ", productName=" + productName
				+ ", productPrice=" + productPrice + ", productImg=" + productImg + ", quantity=" + quantity
				+ ", userName=" + userName + "]";
	}
	public WishListTO(int wishListId, int productId, String productName, int productPrice, String productImg,
			int quantity, String userName) {
		super();
		this.wishListId = wishListId;
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;
		this.productImg = productImg;
		this.quantity = quantity;
		this.userName = userName;
	}
	public WishListTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	


}
