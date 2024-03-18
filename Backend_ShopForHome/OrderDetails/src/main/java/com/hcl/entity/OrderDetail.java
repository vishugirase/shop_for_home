package com.hcl.entity;

import java.util.Date;

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
public class OrderDetail {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderId;
	private int productId;
	private String productName;
	private String productImg;
	private String userName;
	private int totalBill;
	private Date date;
	private int quantity;
	private int discount =0;
	private int sellingPrice;
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
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
	public String getProductImg() {
		return productImg;
	}
	public void setProductImg(String productImg) {
		this.productImg = productImg;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getTotalBill() {
		return totalBill;
	}
	public void setTotalBill(int totalBill) {
		this.totalBill = totalBill;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	public int getSellingPrice() {
		return sellingPrice;
	}
	public void setSellingPrice(int sellingPrice) {
		this.sellingPrice = sellingPrice;
	}
	@Override
	public String toString() {
		return "OrderDetail [orderId=" + orderId + ", productId=" + productId + ", productName=" + productName
				+ ", productImg=" + productImg + ", userName=" + userName + ", totalBill=" + totalBill + ", date="
				+ date + ", quantity=" + quantity + ", discount=" + discount + ", sellingPrice=" + sellingPrice + "]";
	}
	public OrderDetail(int orderId, int productId, String productName, String productImg, String userName,
			int totalBill, Date date, int quantity, int discount, int sellingPrice) {
		super();
		this.orderId = orderId;
		this.productId = productId;
		this.productName = productName;
		this.productImg = productImg;
		this.userName = userName;
		this.totalBill = totalBill;
		this.date = date;
		this.quantity = quantity;
		this.discount = discount;
		this.sellingPrice = sellingPrice;
	}
	public OrderDetail() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
