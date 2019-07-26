package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableZuulProxy
@EnableDiscoveryClient
@SpringBootApplication
public class DemoApplication {
	public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
            	registry.addMapping("*/api/*").allowedOrigins("http://localhost:4200").allowedMethods("GET","POST","PUT","DELETE");
                //registry.addMapping("/userprofile/createUser").allowedOrigins("http://localhost:4200");
            }
        };
    }
	 
	@Bean
	public RestTemplate getRestTemplate() {
	  return new RestTemplate();
	}
	 
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
