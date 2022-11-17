package com.crackers.crackersjack.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crackers.crackersjack.Service.OrdersServices;
import com.crackers.crackersjack.Entity.Orders;
import com.crackers.crackersjack.Repository.OrdersRepository;

@Service
public class OrdersServices implements POrderService{

	
	
	@Autowired
    private OrdersRepository repo;
	
public Iterable<Orders> listAll() {
        return this.repo.findAll();
    }

public void saveOrUpdate(Orders orders)  
{  
    repo.save(orders) ;
    
}

public Orders getOrdersbyid(int id)  
{  
return repo.findById(id).get();  
}

public void updateOrders(Orders orders, int id)  
{  
repo.save(orders);  
}  
 
public void deleteOrders(int id)  
{  
repo.deleteById(id);  
} 

}