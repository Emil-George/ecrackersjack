package com.crackers.crackersjack.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crackers.crackersjack.Entity.Crackers;

@Repository
public interface CrackerRepository extends JpaRepository <Crackers,Integer>{
	
	 Crackers findByCrackername(String name);

}