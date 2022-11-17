package com.crackers.crackersjack.Controller;



import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crackers.crackersjack.Service.CartServices;
import com.crackers.crackersjack.Service.CrackerServices;
import com.crackers.crackersjack.Service.OrdersServices;
import com.crackers.crackersjack.Service.RatingServices;
import com.crackers.crackersjack.Service.UserService;
import com.crackers.crackersjack.Entity.Cart;
import com.crackers.crackersjack.Entity.Crackers;
import com.crackers.crackersjack.Entity.Orders;
import com.crackers.crackersjack.Entity.Rating;
import com.crackers.crackersjack.Entity.Users;
import com.crackers.crackersjack.Repository.CrackerRepository;


@RestController
@CrossOrigin(origins="*")
public class Controller {

	
	
	@Autowired
	private UserService services;
	@Autowired
	private CrackerServices cservices;
	@Autowired
	private CartServices cartservices;
	@Autowired
	private OrdersServices ordersservices;
	@Autowired
	private RatingServices ratingservices;
	@Autowired
	CrackerRepository crepo;
	
	
	
	
//	
//	@PostMapping("/usercart/{cartid}")
//	public void newcart(@RequestBody Users users, @PathVariable int cartid) {
//		
//		services.usercart(cartid,users);
//
//	}
	
	@GetMapping("crackername/{name}")
	public Crackers getCrackerByName(@PathVariable String name){
		return crepo.findByCrackername(name);
	}
	
	@PostMapping("/rating/{userid}/{itemid}/{star}")
	public Rating addRating(@PathVariable int userid,@PathVariable int itemid,@PathVariable int star) {
		return ratingservices.addRating(userid, itemid, star);
	}
	
	@PutMapping("/editrating/{id}/{userid}/{itemid}/{star}")
	 
	public Rating editRating(@PathVariable int id,@PathVariable int userid,@PathVariable int itemid,@PathVariable int star) {
		return ratingservices.saveOrUpdate(id,userid, itemid, star); 
    }  
	
	@GetMapping("/getrating")
	public Iterable<Rating>getRating()
	{
	return ratingservices.listAll();    
	}

	@PostMapping("/manytoone/{userid}")
	public void makecart(@RequestBody Cart cart, @PathVariable int userid) {
		
		services.onetomany(userid,cart);

	}
	
	@RequestMapping("/takepwd/{id}")
	public void takepwd(@PathVariable(name="id") int id)
	{
		services.takepwd(id);
	}
	
	@RequestMapping("/checkauth/{upwd}")
	public boolean checkauth(@PathVariable(name="upwd") String upwd)
	{
		boolean flag=services.checkauth(upwd);
		return flag;
	}
	
	@GetMapping("/getall")
	public Iterable<Users>getUsers()
	{
	return services.listAll();    
	}
	 
	@PostMapping(value="/save") 
	 public void saveUser(@RequestBody @Valid Users users)  
	{  	
	 services.saveOrUpdate(users);    
	}
  
	@RequestMapping("/users/{id}")  
	private Users getUsers(@PathVariable(name = "id") int id)  
	{  
	return services.getUserbyid(id);  
	}  
	
	
	@PutMapping("/edit/{id}")
	 
	    private Users update(@RequestBody Users users,@PathVariable int id)  
	    {  
		users.setId(id);
	   services.Update(users);  
	       return users;  
	    }  
	 
	@DeleteMapping("/delete/{id}")  
	private void deleteUsers(@PathVariable("id") int id)  
	{  
	services.delete(id);  
	}  	
	
	
	
	@GetMapping("/getcrackers")
	public Iterable<Crackers>getCrackers()
	{
	return cservices.listAll();    
	}
	 
	@PostMapping(value="/savecrackers") 
	 public void saveCrackers(@RequestBody @Valid Crackers crackers)  
	{  	
	 cservices.saveOrUpdate(crackers);    
	}
	@RequestMapping("/crackers/{id}")  
	private Crackers getCrackers(@PathVariable(name = "id") int id)  
	{  
	return cservices.getCrackersbyid(id);  
	}  
	    
	@PutMapping("/editcrackers/{id}")
	 
	    private Crackers updateCrackers(@RequestBody Crackers crackers,@PathVariable int id)  
	    {  
		crackers.setId(id);
	   cservices.updateCrackers(crackers,id);  
	       return crackers;  
	    }  
	 
	@DeleteMapping("/deletecrackers/{id}")  
	private void deleteCrackers(@PathVariable("id") int id)  
	{  
	cservices.deleteCrackers(id);  
	}  	
	
	
	
	@GetMapping("/getcart")
	public Iterable<Cart>getCart()
	{
	return cartservices.listAll();    
	}
	 
	@PostMapping(value="/savecart") 
	 public void saveCart(@RequestBody @Valid Cart cart)  
	{  	
	 cartservices.saveOrUpdate(cart);    
	}
	@RequestMapping("/cart/{id}")  
	private Cart getCart(@PathVariable(name = "id") int id)  
	{  
	return cartservices.getCartbyid(id);  
	}  
	    
	@PutMapping("/editcart/{id}/{uid}")
	 
	    private Cart updateCart(@RequestBody Cart cart,@PathVariable int id,@PathVariable int uid)  
	    {  
		cart.setId(id);
	    return services.onetomany(uid,cart);   
	    }  
	
	 
	@DeleteMapping("/deletecart/{id}")  
	private void deleteCart(@PathVariable("id") int id)  
	{  
	cartservices.deleteCart(id);  
	} 
	
	
	
	@GetMapping("/getorders")
	public Iterable<Orders>getOrders()
	{
	return ordersservices.listAll();    
	}
	 
	@PostMapping(value="/saveorders") 
	 public void saveOrders(@RequestBody @Valid Orders orders)  
	{  	
	 ordersservices.saveOrUpdate(orders);    
	}
	@RequestMapping("/orders/{id}")  
	private Orders getOrders(@PathVariable(name = "id") int id)  
	{  
	return ordersservices.getOrdersbyid(id);  
	}  
	    
	@PutMapping("/editorders/{id}")
	 
	    private Orders updateOrders(@RequestBody Orders orders,@PathVariable int id)  
	    {  
		orders.setId(id);
	   ordersservices.updateOrders(orders,id);  
	       return orders;  
	    }  
	 
	@DeleteMapping("/deleteorders/{id}")  
	private void deleteOrders(@PathVariable("id") int id)  
	{  
	ordersservices.deleteOrders(id);  
	} 
	
}
