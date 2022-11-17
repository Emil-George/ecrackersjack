package com.crackers.crackersjack.Entity;



import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
//import javax.persistence.ManyToOne;
//import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name="cart")
public class Cart {

	   @Id
	    @GeneratedValue(strategy= GenerationType.IDENTITY)
	    private int Id;
	   
	  
	   
	    @NotNull
		@Column(name="productid")
	    private int productid;
		

		@NotNull
	    @Column(name="productname")
	    private String productname;
	    
		@NotNull
	    @Column(name="quantity")
	    private String quantity;
		
		
		@NotNull
	    @Column(name="price")
	    private String price;
		
		
		
		@ManyToOne
		private Users users;
		
		
		
		public Users getUsers() {
			return users;
		}

		public void setUsers(Users users) {
			this.users = users;
		}

		public int getId() {
			return Id;
		}

		public void setId(int id) {
			Id = id;
		}
		

		public int getProductid() {
			return productid;
		}

		public void setProductid(int productid) {
			this.productid = productid;
		}

		public String getProductname() {
			return productname;
		}

		public void setProductname(String productname) {
			this.productname = productname;
		}

		public String getQuantity() {
			return quantity;
		}

		public void setQuantity(String quantity) {
			this.quantity = quantity;
		}

		public String getPrice() {
			return price;
		}

		public void setPrice(String price) {
			this.price = price;
		}


}
