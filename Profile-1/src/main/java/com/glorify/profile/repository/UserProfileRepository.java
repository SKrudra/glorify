package com.glorify.profile.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.glorify.profile.model.UserProfile;

public interface UserProfileRepository extends MongoRepository<UserProfile, String> {

    public UserProfile findTopByUserName(String userName);
	

}
