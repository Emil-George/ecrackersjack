package com.crackers.crackersjack.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crackers.crackersjack.Service.CartServices;
import com.crackers.crackersjack.Entity.Cart;
import com.crackers.crackersjack.Repository.CartRepository;

@Service
public class CartServices implements PCartService{

	
	
	@Autowired
    private CartRepository repo;
	
public Iterable<Cart> listAll() {
        return this.repo.findAll();
    }

public void saveOrUpdate(Cart cart)  
{  
    repo.save(cart) ;
    
}

public Cart getCartbyid(int id)  
{  
return repo.findById(id).get();  
}

public void updateCart(Cart cart, int id)  
{  
repo.save(cart);  
}  
 
public void deleteCart(int id)  
{  
repo.deleteById(id);  
} 
}