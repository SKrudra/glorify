package com.microservice.loginregistration.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.loginregistration.entity.LoginRegistrationEntity;

public interface LoginRegistrationRepository extends JpaRepository<LoginRegistrationEntity, Long> {
	Optional<LoginRegistrationEntity> findByEmail(String email);
}
 