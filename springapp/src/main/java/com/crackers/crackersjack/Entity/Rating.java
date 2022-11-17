package com.crackers.crackersjack.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="rating")
public class Rating {
	
	
	   @Id
	    @GeneratedValue(strategy= GenerationType.IDENTITY)
	    private int Id;
	   
		@ManyToOne
		private Users users;
		
		@ManyToOne
		private Crackers crackers;
		
	    @NotNull
		@Column(name="rating")
	    private int star;

		public int getStar() {
			return star;
		}

		public void setStar(int star) {
			this.star = star;
		}

		public int getId() {
			return Id;
		}

		public void setId(int id) {
			Id = id;
		}

		public Users getUsers() {
			return users;
		}

		public void setUsers(Users users) {
			this.users = users;
		}

		public Crackers getCrackers() {
			return crackers;
		}

		public void setCrackers(Crackers crackers) {
			this.crackers = crackers;
		}
		
		

}
