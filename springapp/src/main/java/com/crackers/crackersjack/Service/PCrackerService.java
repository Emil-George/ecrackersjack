package com.crackers.crackersjack.Service;

import com.crackers.crackersjack.Entity.Crackers;

public interface PCrackerService {

	
public Iterable<Crackers> listAll();
public void saveOrUpdate(Crackers crackers);

public Crackers getCrackersbyid(int id);

public void updateCrackers(Crackers crackers, int id);
 
public void deleteCrackers(int id);
}
