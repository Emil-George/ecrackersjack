package com.crackers.crackersjack.Service;

import com.crackers.crackersjack.Entity.Orders;

public interface POrderService {

	
public Iterable<Orders> listAll();
public void saveOrUpdate(Orders orders);

public Orders getOrdersbyid(int id);

public void updateOrders(Orders orders, int id);  
 
public void deleteOrders(int id);
}
