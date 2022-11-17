package com.crackers.crackersjack.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crackers.crackersjack.Entity.Users;

@Repository
public interface UserRepository extends JpaRepository <Users,Integer>{

}