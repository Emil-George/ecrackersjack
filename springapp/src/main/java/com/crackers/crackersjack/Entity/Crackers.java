package com.crackers.crackersjack.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="crackers")
public class Crackers {
	
	   @Id
	    @GeneratedValue(strategy= GenerationType.IDENTITY)
	    private int Id;
	   
	   @NotNull(message = "enter a cracker")
		@Column(name="name")
	    private String crackername;
		
		@NotNull(message = "provide price")
	    @Column(name="price")
	    private String crackerprice;
		
	    
		@NotNull(message = "provide a url")
	    @Column(name="image")
	    private String crackerimage;
	    
		@NotNull(message = "enter quantity")
		@Size(min = 1, message = "minimum 1 needed")
	    @Column(name="quantity")
	    private String crackerquantity;
		
		@Column(name="rating")
		private String rating;
		
		@Column(name="count")
		private String count;

		public String getCount() {
			return count;
		}

		public void setCount(String count) {
			this.count = count;
		}

		public String getRating() {
			return rating;
		}

		public void setRating(String rating) {
			this.rating = rating;
		}

		public int getId() {
			return Id;
		}

		public void setId(int id) {
			Id = id;
		}

		public String getCrackername() {
			return crackername;
		}

		public void setCrackername(String crackername) {
			this.crackername = crackername;
		}

		public String getCrackerprice() {
			return crackerprice;
		}

		public void setCrackerprice(String crackerprice) {
			this.crackerprice = crackerprice;
		}

		public String getCrackerimage() {
			return crackerimage;
		}

		public void setCrackerimage(String crackerimage) {
			this.crackerimage = crackerimage;
		}

		public String getCrackerquantity() {
			return crackerquantity;
		}

		public void setCrackerquantity(String crackerquantity) {
			this.crackerquantity = crackerquantity;
		}

}