package com.crackers.crackersjack.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="orders")
public class Orders {

	
	   @Id
	    @GeneratedValue(strategy= GenerationType.IDENTITY)
	    private int Id;
	   
	    @NotNull
		@Column(name="orderid")
	    private String orderid;
	   
	   @NotNull
	   @Column(name="userid")
	   private int userid;
		

		@NotNull
	    @Column(name="productname")
	    private String productname;

		
		
		@NotNull
	    @Column(name="price")
	    private String price;
		
	    
		@NotNull
	    @Column(name="quantity")
	    private String quantity;
		
		@Column(name="pay")
		private Boolean pay;


		public Boolean getPay() {
			return pay;
		}


		public void setPay(Boolean pay) {
			this.pay = pay;
		}


		public int getId() {
			return Id;
		}


		public void setId(int id) {
			Id = id;
		}


		public String getOrderid() {
			return orderid;
		}


		public void setOrderid(String orderid) {
			this.orderid = orderid;
		}


		public int getUserid() {
			return userid;
		}


		public void setUserid(int userid) {
			this.userid = userid;
		}


		public String getProductname() {
			return productname;
		}


		public void setProductname(String productname) {
			this.productname = productname;
		}


		public String getPrice() {
			return price;
		}


		public void setPrice(String price) {
			this.price = price;
		}


		public String getQuantity() {
			return quantity;
		}


		public void setQuantity(String quantity) {
			this.quantity = quantity;
		}
		
		
}