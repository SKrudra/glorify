package com.microservice.comments.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.comments.entity.Comment;
import com.microservice.comments.repository.CommentsRepository;

@Service
public class CommentsService {
	
	@Autowired
	CommentsRepository commentsRepository;
	
	public List<Comment> getComments(Long id) {
		return commentsRepository.findByCommentedOn(id);
	}
	
}
