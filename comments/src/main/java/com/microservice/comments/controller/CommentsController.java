package com.microservice.comments.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestOperationsExtensionsKt;

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
	
	@PostMapping(value="/writecomment")
	ResponseEntity writeComment(@RequestBody Comment comment) {
		commentsService.writeComment(comment);
		return new ResponseEntity(HttpStatus.OK);
	}
	
}
