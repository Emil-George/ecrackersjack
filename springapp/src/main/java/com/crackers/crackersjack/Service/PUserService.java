package com.crackers.crackersjack.Service;

import com.crackers.crackersjack.Entity.Users;

public interface PUserService {

	
	public Iterable<Users> listAll();
public void takepwd(int id);

public boolean checkauth(String upwd) ;



public void saveOrUpdate(Users users)  ;


public void Update(Users users)  ;

public Users getUserbyid(int id) ;

public void update(Users users, int id) ;
 
public void delete(int id)  ;
}
