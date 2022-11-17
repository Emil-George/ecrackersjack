package com.crackers.crackersjack.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crackers.crackersjack.Entity.Crackers;
import com.crackers.crackersjack.Entity.Rating;
import com.crackers.crackersjack.Entity.Users;
import com.crackers.crackersjack.Repository.CrackerRepository;
import com.crackers.crackersjack.Repository.RatingRepository;
import com.crackers.crackersjack.Repository.UserRepository;

@Service
public class RatingServices implements PRatingServices{
	
	@Autowired
	private RatingRepository repo;
	@Autowired
	private UserRepository urepo;
	@Autowired
	private CrackerRepository crepo;
	
	
	public Rating addRating(int userid, int itemid, int star) {
		Rating rating = new Rating();
		Users users= this.urepo.findById(userid).orElseThrow(()->new RuntimeException("User not found"));
		Crackers crackers= this.crepo.findById(itemid).orElseThrow(()->new RuntimeException("Cracker not found"));
		rating.setStar(star);
		rating.setUsers(users);
		rating.setCrackers(crackers);
		this.repo.save(rating);
		return rating;
		}
	
	
	
	public Iterable<Rating> listAll() {
        return this.repo.findAll();
    }

public Rating saveOrUpdate(int id,int userid, int itemid, int star)  
{  
	Rating rating = new Rating();
	Users users= this.urepo.findById(userid).orElseThrow(()->new RuntimeException("User not found"));
	Crackers crackers= this.crepo.findById(itemid).orElseThrow(()->new RuntimeException("Cracker not found"));
	rating.setId(id);
	rating.setStar(star);
	rating.setUsers(users);
	rating.setCrackers(crackers);
	this.repo.save(rating);
	return rating;
    
}

public Rating getRatingbyid(int id)  
{  
return repo.findById(id).get();  
}
 
 
public void deleteRating(int id)  
{  
repo.deleteById(id);  
}


}
