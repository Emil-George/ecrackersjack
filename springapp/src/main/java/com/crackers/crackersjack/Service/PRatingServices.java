package com.crackers.crackersjack.Service;


import com.crackers.crackersjack.Entity.Rating;


public interface PRatingServices {
	
public Rating addRating(int userid, int itemid, int star);
public Iterable<Rating> listAll();
public Rating saveOrUpdate(int id,int userid, int itemid, int star);
public Rating getRatingbyid(int id);
public void deleteRating(int id);
}
