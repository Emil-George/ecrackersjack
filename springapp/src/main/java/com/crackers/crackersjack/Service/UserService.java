package com.crackers.crackersjack.Service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crackers.crackersjack.Service.UserService;
import com.crackers.crackersjack.Entity.Cart;
import com.crackers.crackersjack.Entity.Users;
import com.crackers.crackersjack.Repository.CartRepository;
import com.crackers.crackersjack.Repository.UserRepository;

@Service
public class UserService implements PUserService{

	@Autowired
    private UserRepository repo;
	@Autowired
	private CartRepository crepo;
	
PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
public String pwd;




//public void usercart(int cartid, Users users) {
//Cart cart= this.crepo.findById(cartid).orElseThrow(()->new RuntimeException("item not found"));
//users.setCart(cart);
//this.repo.save(users);
//}


public Cart onetomany(int userid, Cart cart) {
Users users= this.repo.findById(userid).orElseThrow(()->new RuntimeException("User not found"));
cart.setUsers(users);
this.crepo.save(cart);
return cart;
}


public Iterable<Users> listAll() {
        return this.repo.findAll();
    }


public void takepwd(int id) {
	Users users=repo.findById(id).get();
	pwd= users.getPassword();
}

public boolean checkauth(String upwd) {
	
	boolean ismatch=passwordEncoder.matches(upwd, pwd);
	return ismatch;
}



public void saveOrUpdate(Users users)  
{  
    String npwd=this.passwordEncoder.encode(users.getPassword());
    users.setPassword(npwd);
    repo.save(users) ;
    
}


public void Update(Users users)  
{  
    repo.save(users) ; 
}


public Users getUserbyid(int id)  
{  
return repo.findById(id).get();  
}

public void update(Users users, int id)  
{  
repo.save(users);  
}  
 
public void delete(int id)  
{  
repo.deleteById(id);  
}  
  

}