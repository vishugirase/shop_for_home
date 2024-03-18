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
public class Coupon {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int couponCode;
	private String userName;
	private String used = "not used";
	private double disc = 0.25;
	
	public double getDisc() {
		return disc;
	}
	public void setDisc(double disc) {
		this.disc = disc;
	}
	public int getCouponCode() {
		return couponCode;
	}
	public void setCouponCode(int couponCode) {
		this.couponCode = couponCode;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUsed() {
		return used;
	}
	public void setUsed(String used) {
		this.used = used;
	}
	@Override
	public String toString() {
		return "Coupon [couponCode=" + couponCode + ", userName=" + userName + ", used=" + used + ", disc=" + disc
				+ "]";
	}
	public Coupon(int couponCode, String userName, String used, double disc) {
		super();
		this.couponCode = couponCode;
		this.userName = userName;
		this.used = used;
		this.disc = disc;
	}
	public Coupon() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
