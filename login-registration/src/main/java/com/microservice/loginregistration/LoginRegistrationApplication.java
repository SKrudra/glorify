package com.microservice.loginregistration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class LoginRegistrationApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginRegistrationApplication.class, args);
	}

}

