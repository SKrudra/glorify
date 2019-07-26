package com.microservice.loginregistration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.microservice.loginregistration.entity.LoginRegistrationEntity;
import com.microservice.loginregistration.service.LoginRegistrationService;

@Controller
@RequestMapping("/validation")
public class LoginRegistrationController {
	
	@Autowired
	LoginRegistrationService loginRegistrationService;
	
	@GetMapping(value="/login")
	public ResponseEntity<?> validateLogin() {
		/*String email = login.getEmail();
		String password = login.getPassword();
		Long userId = loginRegistrationService.validateCredentials(email, password);
		return ResponseEntity.ok(userId)*/;
		return ResponseEntity.ok("HI");
	}
	
	@PostMapping(value="/registernow")
	public ResponseEntity<LoginRegistrationEntity> registerNow(@RequestBody LoginRegistrationEntity login) {
		LoginRegistrationEntity loginEntity = loginRegistrationService.registerNow(login);
		return ResponseEntity.ok(loginEntity);
	}
}
