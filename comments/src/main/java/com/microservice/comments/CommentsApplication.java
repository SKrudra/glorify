package com.microservice.comments;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableDiscoveryClient
@SpringBootApplication
@Configuration
public class CommentsApplication {
	public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
            	registry.addMapping("*/api/*").allowedOrigins("http://localhost:4200").allowedMethods("GET","POST","PUT","DELETE");
            	//registry.addMapping("/**");
            }
        };
    }
	public static void main(String[] args) {
		SpringApplication.run(CommentsApplication.class, args);
	}
}
