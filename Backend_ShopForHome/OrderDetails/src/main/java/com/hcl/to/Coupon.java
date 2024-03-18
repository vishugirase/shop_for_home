package com.hcl.to;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Coupon {
	
	private String used;

	public String getUsed() {
		return used;
	}

	public void setUsed(String used) {
		this.used = used;
	}

	@Override
	public String toString() {
		return "Coupon [used=" + used + "]";
	}

	public Coupon(String used) {
		super();
		this.used = used;
	}

	public Coupon() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
