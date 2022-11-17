package com.crackers.crackersjack.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crackers.crackersjack.Entity.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders,Integer>{

}