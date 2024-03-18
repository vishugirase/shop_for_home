package com.hcl.to;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SingleProduct {
	
	private int productId;
	private String productName;
	private int productPrice;
	private int quantity;
	private int totalPrice;
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
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}
	@Override
	public String toString() {
		return "SingleProduct [productId=" + productId + ", productName=" + productName + ", productPrice="
				+ productPrice + ", quantity=" + quantity + ", totalPrice=" + totalPrice + "]";
	}
	public SingleProduct(int productId, String productName, int productPrice, int quantity, int totalPrice) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;
		this.quantity = quantity;
		this.totalPrice = totalPrice;
	}
	public SingleProduct() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
