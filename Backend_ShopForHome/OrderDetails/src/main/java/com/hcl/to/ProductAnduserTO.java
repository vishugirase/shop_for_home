package com.hcl.to;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductAnduserTO {
	private String userName;
	private int productId;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	@Override
	public String toString() {
		return "ProductAnduserTO [userName=" + userName + ", productId=" + productId + "]";
	}
	public ProductAnduserTO(String userName, int productId) {
		super();
		this.userName = userName;
		this.productId = productId;
	}
	public ProductAnduserTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
