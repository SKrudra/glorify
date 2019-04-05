package com.microservice.comments.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.comments.entity.Comment;
import com.microservice.comments.service.CommentsService;

@RestController
public class CommentsController {

	@Autowired
	CommentsService commentsService;
	
	@GetMapping(value="/api/comments/{userId}")
	public List<Comment> getComments(@PathVariable Long userId) {
		return commentsService.getComments(userId);
	}
	
}
