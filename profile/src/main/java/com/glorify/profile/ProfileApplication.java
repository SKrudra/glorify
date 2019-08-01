package com.glorify.profile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableDiscoveryClient
@SpringBootApplication
public class ProfileApplication {
	
	public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
            	registry.addMapping("*/api/*").allowedOrigins("http://localhost:4200").allowedMethods("GET","POST","PUT","DELETE");
            }
        };
    }
	
	public static void main(String[] args) {
		SpringApplication.run(ProfileApplication.class, args);
	}

}
