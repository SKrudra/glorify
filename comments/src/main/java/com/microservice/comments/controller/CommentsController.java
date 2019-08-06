package com.microservice.comments.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.comments.repository.CommentsRepository;

@RestController
@RequestMapping("/comments")
public class CommentsController {
	
	@Autowired
	private CommentsRepository commentRepository;
	
	
}
