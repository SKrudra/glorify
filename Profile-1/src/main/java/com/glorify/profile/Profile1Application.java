package com.glorify.profile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableEurekaClient
@SpringBootApplication
@Configuration
public class Profile1Application {
	 public WebMvcConfigurer corsConfigurer() {
	        return new WebMvcConfigurer() {
	            @Override
	            public void addCorsMappings(CorsRegistry registry) {
	            	registry.addMapping("*/api/*").allowedOrigins("http://localhost:4200").allowedMethods("GET","POST","PUT","DELETE");
	                //registry.addMapping("/userprofile/createUser").allowedOrigins("http://localhost:4200");
	            }
	        };
	    }
	public static void main(String[] args) {
		SpringApplication.run(Profile1Application.class, args);
	}

}
