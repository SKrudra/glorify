package com.glorify.profile.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.glorify.profile.entity.Profile;
import com.glorify.profile.repository.ProfileRepository;

@Service
public class ProfileService {
	
	@Autowired
	private ProfileRepository profileRepository;
	
	public Profile getProfile(Long userId) {
		Optional<Profile> opProfile =  profileRepository.findById(userId);
		if(opProfile.isPresent()) {
			return opProfile.get();
		} else return null;
	}
	
	public List<Profile> searchProfiles(String keyword) {
		return profileRepository.getProfilesFromKeyword(keyword, PageRequest.of(0, 5));
	}
	
}
