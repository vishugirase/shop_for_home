package com.hcl.dto;





public class ProductDTO {
	
	private long productId;
	private String productName;
	private int productPrice;
	private int quantity;
	private String category;
	private String productImg;
	public long getProductId() {
		return productId;
	}
	public void setProductId(long productId) {
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
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getProductImg() {
		return productImg;
	}
	public void setProductImg(String productImg) {
		this.productImg = productImg;
	}
	@Override
	public String toString() {
		return "ProductDTO [productId=" + productId + ", productName=" + productName + ", productPrice=" + productPrice
				+ ", quantity=" + quantity + ", category=" + category + ", productImg=" + productImg + "]";
	}
	public ProductDTO(long productId, String productName, int productPrice, int quantity, String category,
			String productImg) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;
		this.quantity = quantity;
		this.category = category;
		this.productImg = productImg;
	}
	public ProductDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
