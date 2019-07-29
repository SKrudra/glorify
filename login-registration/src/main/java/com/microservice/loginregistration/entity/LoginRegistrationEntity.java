package com.microservice.loginregistration.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="LOGIN_REGISTRATION")
public @Data class LoginRegistrationEntity {
	
	@Id @GeneratedValue
	@Column(name="ID")
	private Long id;
	
	@Column(name="EMAIL")
	private String email;
	
	@Column(name="PASSWORD")
	private String password;
}
