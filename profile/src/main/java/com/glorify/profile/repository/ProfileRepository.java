package com.glorify.profile.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.glorify.profile.entity.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
	
}
