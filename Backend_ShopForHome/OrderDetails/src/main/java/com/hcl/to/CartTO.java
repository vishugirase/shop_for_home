package com.hcl.to;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CartTO {
	
	private int cartId;
	private int productId;
	private String productName;
	private int productPrice;
	private int quantity;
	private String userName;
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
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
		return "CartTO [cartId=" + cartId + ", productId=" + productId + ", productName=" + productName
				+ ", productPrice=" + productPrice + ", quantity=" + quantity + ", userName=" + userName + "]";
	}
	public CartTO(int cartId, int productId, String productName, int productPrice, int quantity, String userName) {
		super();
		this.cartId = cartId;
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;
		this.quantity = quantity;
		this.userName = userName;
	}
	public CartTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
