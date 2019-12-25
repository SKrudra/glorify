package com.microservice.loginregistration.service;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.loginregistration.entity.LoginRegistrationEntity;
import com.microservice.loginregistration.repository.LoginRegistrationRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class LoginRegistrationService {
	
	Logger log = LoggerFactory.getLogger(LoginRegistrationService.class);
	
	@Autowired
	private LoginRegistrationRepository loginRegistrationRepository;
	
	public Long validateCredentials(String email, String password) {
		Optional<LoginRegistrationEntity> opEntity =  loginRegistrationRepository.findByEmail(email);
		
		if(opEntity.isPresent()) {
			log.trace(opEntity.get().toString());
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
