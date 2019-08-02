package com.glorify.profile.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.glorify.profile.entity.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
	
	@Query("select p from Profile p where p.firstName like %:keyword%") 
	public List<Profile> getProfilesFromKeyword(@Param("keyword") String keyword, Pageable pageable);
	
}
