package com.glorify.profile.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.resource.HttpResource;

import com.glorify.profile.model.UserProfile;
import com.glorify.profile.repository.UserProfileRepository;

import ch.qos.logback.core.status.Status;

@RestController
@RequestMapping("/userprofile")
public class UserProfileController {

	@Autowired 
	UserProfileRepository userProfileRepo;
	
	@CrossOrigin
	@PostMapping("/createUser")
	public UserProfile createUserProfile(@RequestBody UserProfile userProfile,HttpServletResponse response) {	
			response.setStatus(Status.ERROR,"User already exists.");
			if(userProfileRepo.findTopByUserName(userProfile.getUsername())==null) {
				userProfile = userProfileRepo.save(userProfile);
				response.setStatus(HttpServletResponse.SC_ACCEPTED,"User Created Succesfully.");
				return userProfile;	
			}
			return null;		
	}
	
	@CrossOrigin
	@PutMapping("/editUserProfile")
	public UserProfile editUserProfile(@RequestBody UserProfile userProfile,HttpServletResponse response) {	
			response.setStatus(Status.ERROR,"User already exists.");
			if(userProfileRepo.findTopByUserName(userProfile.getUsername())==null) {
				userProfile = userProfileRepo.save(userProfile);
				response.setStatus(HttpServletResponse.SC_ACCEPTED,"User Created Succesfully.");
				return userProfile;	
			}
			return null;		
	}
	@CrossOrigin
	@PutMapping("/updateUserProfile")
	public String updateUserProfile(@RequestBody UserProfile userProfile) {			
		userProfile.setId(userProfileRepo.findTopByUserName(userProfile.getUsername()).getId());
		userProfileRepo.save(userProfile);
		return "Updated Successfully";
			
	}
	
	@CrossOrigin
	@GetMapping("/getAllUserProfiles")
	public List<UserProfile> getAllUserProfiles(){
		return userProfileRepo.findAll();
		
	}
	
	@CrossOrigin
	@PostMapping("/getUserProfileByName")
	public ResponseEntity<UserProfile>getUserProfileByName(@RequestBody UserProfile userProfile){
		UserProfile userProfileDB = userProfileRepo.findTopByUserName(userProfile.getUsername());
		if(userProfileDB !=null && userProfileDB.getPassword().equals(userProfile.getPassword())) {
			return new ResponseEntity<UserProfile>(userProfileDB, HttpStatus.OK);

		}
		return new ResponseEntity<UserProfile>(userProfileDB, HttpStatus.NOT_FOUND);
		
	}
	@CrossOrigin
	@DeleteMapping("/deleteUserProfile")
	public void deleteUserProfile(@RequestBody UserProfile userProfile){
		userProfileRepo.deleteById(userProfile.getId());
		
	}
	
}
