package com.microservice.loginregistration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.loginregistration.entity.LoginRegistrationEntity;
import com.microservice.loginregistration.service.LoginRegistrationService;

@CrossOrigin
@RestController
@RequestMapping("/validation")
public class LoginRegistrationController {
	
	@Autowired
	LoginRegistrationService loginRegistrationService;
	

	@PostMapping(value="/login")
	public ResponseEntity<?> validateLogin(@RequestBody LoginRegistrationEntity login) {
		/*String email = login.getEmail();
		String password = login.getPassword();
		Long userId = loginRegistrationService.validateCredentials(email, password);
		return ResponseEntity.ok(userId)*/;
		System.out.println(login.getEmail());
		return ResponseEntity.ok(login);
	}
	
	@PostMapping(value="/registernow")
	public ResponseEntity<LoginRegistrationEntity> registerNow(@RequestBody LoginRegistrationEntity login) {
		LoginRegistrationEntity loginEntity = loginRegistrationService.registerNow(login);
		return ResponseEntity.ok(loginEntity);
	}
}
