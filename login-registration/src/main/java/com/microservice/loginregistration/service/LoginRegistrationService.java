package com.microservice.loginregistration.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.loginregistration.entity.LoginRegistrationEntity;
import com.microservice.loginregistration.repository.LoginRegistrationRepository;

@Service
public class LoginRegistrationService {
	
	@Autowired
	private LoginRegistrationRepository loginRegistrationRepository;
	
	public Long validateCredentials(String email, String password) {
		Optional<LoginRegistrationEntity> opEntity =  loginRegistrationRepository.findByEmail(email);
		if(opEntity.isPresent()) {
			LoginRegistrationEntity credentials = opEntity.get();
			if(password.equals(credentials.getPassword())) {
				return credentials.getId();
			}
		}
		return -1L;
	}
	
	public LoginRegistrationEntity registerNow(LoginRegistrationEntity loginEntity) {
		LoginRegistrationEntity opEntity =  loginRegistrationRepository.save(loginEntity);
		return opEntity ;
	}
	
}
