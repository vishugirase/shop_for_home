package com.hcl.to;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
	
	private String productName;
	private int productPrice;
	private String productImg;
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
	@Override
	public String toString() {
		return "Product [productName=" + productName + ", productPrice=" + productPrice + ", productImg=" + productImg
				+ "]";
	}
	public Product(String productName, int productPrice, String productImg) {
		super();
		this.productName = productName;
		this.productPrice = productPrice;
		this.productImg = productImg;
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
