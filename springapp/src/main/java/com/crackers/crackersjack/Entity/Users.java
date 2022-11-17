package com.crackers.crackersjack.Entity;



import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.ManyToOne;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name="users")
public class Users {

	public static final String HttpStatus = null;


    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int Id;
    
	@NotNull(message = "Specify admin/user")
	@Column(name="userrole")
    private String userrole;
	
	@NotNull(message = "Email is required.")
	@Email(message = "format : example@gmail.com")
    @Column(name="email")
    private String email;
    
	@NotNull(message = "Username required.")
    @Column(name="username")
    private String username;
    
	@NotNull(message = "MobileNumber required.")
	@Size(min = 10, message = "Not valid")
    @Column(name="mobilenumber")
    private String mobilenumber;
    
	@NotNull(message = "Password required.")
	@Size(min = 6, message = "Password should be atleast 6 characters.")
    @Column(name="password")
    private String password;
	
	
//	@ManyToOne
//	private Cart cart;
//	
//	
//	public Cart getCart() {
//		return cart;
//	}
//
//	public void setCart(Cart cart) {
//		this.cart = cart;
//	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getUserrole() {
		return userrole;
	}

	public void setUserrole(String userrole) {
		this.userrole = userrole;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


}