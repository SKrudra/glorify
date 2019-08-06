package com.microservice.comments.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.comments.entity.Comment;
import com.microservice.comments.service.CommentsService;

@CrossOrigin
@RestController
public class CommentsController {
	
	@Autowired
	private CommentsService commentsService;
	
	@GetMapping(value="/allon/{userId}")
	List<Comment> getAllCommentsOn(@PathVariable Long userId) {
		return commentsService.getAllCommentsOn(userId);
	}
	
}
