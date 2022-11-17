package com.crackers.crackersjack.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crackers.crackersjack.Entity.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart,Integer>{

}
