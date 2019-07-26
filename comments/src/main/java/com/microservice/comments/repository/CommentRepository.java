package com.microservice.comments.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.microservice.comments.model.Comments;

public interface CommentRepository extends MongoRepository<Comments,String>{

	public List<Comments> findByCommentTo(String commentToId);

	public List<Comments> findByCommentBy(String commentById);	

}
