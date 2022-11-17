package com.crackers.crackersjack.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crackers.crackersjack.Service.CrackerServices;
import com.crackers.crackersjack.Entity.Crackers;
import com.crackers.crackersjack.Repository.CrackerRepository;

@Service
public class CrackerServices implements PCrackerService{

	
	@Autowired
    private CrackerRepository repo;
	
public Iterable<Crackers> listAll() {
        return this.repo.findAll();
    }

public void saveOrUpdate(Crackers crackers)  
{  
    repo.save(crackers) ;
    
}

public Crackers getCrackersbyid(int id)  
{  
return repo.findById(id).get();  
}

public void updateCrackers(Crackers crackers, int id)  
{  
repo.save(crackers);  
}  
 
public void deleteCrackers(int id)  
{  
repo.deleteById(id);  
} 


}