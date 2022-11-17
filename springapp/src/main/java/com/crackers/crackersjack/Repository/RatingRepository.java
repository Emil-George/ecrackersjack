package com.crackers.crackersjack.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crackers.crackersjack.Entity.Rating;


@Repository
public interface RatingRepository extends JpaRepository<Rating,Integer>{

}
