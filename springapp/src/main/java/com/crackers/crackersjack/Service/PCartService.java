package com.crackers.crackersjack.Service;

import com.crackers.crackersjack.Entity.Cart;

public interface PCartService {
	
	
public Iterable<Cart> listAll();
public void saveOrUpdate(Cart cart);
public Cart getCartbyid(int id);
public void updateCart(Cart cart, int id);
public void deleteCart(int id) ;
}
