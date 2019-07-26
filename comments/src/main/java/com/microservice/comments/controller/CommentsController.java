package com.microservice.comments.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.comments.repository.CommentRepository;
import com.microservice.comments.model.Comments;

@RestController
@RequestMapping("/comments")
public class CommentsController {
	
	@Autowired
	CommentRepository commentRepository;
	
	@PostMapping("/createComment")
	public ResponseEntity<Comments> createComment(@RequestBody Comments comment) {		
		return new ResponseEntity<Comments>(commentRepository.save(comment), HttpStatus.OK);
	}
	
	@GetMapping("getComments")
	public List<Comments> getComment(){
		return  commentRepository.findAll();
	}
	
	@GetMapping("getCommentsByCommentTo")
	public List<Comments> getCommentsByCommentTo(@RequestBody String commentToId){
		return  commentRepository.findByCommentTo(commentToId);
	}
	
	@GetMapping("getCommentsByCommenter")
	public List<Comments> getCommentsByCommentBy(@RequestBody String commentById){
		return  commentRepository.findByCommentTo(commentById);
	}
	
	@GetMapping("getComment")
	public Optional<Comments> getComment(@RequestBody String commentId){
		return commentRepository.findById(commentId);
	}
	

	@PutMapping("updateComment")
	public Comments updateComment(@RequestBody Comments comment){
		return commentRepository.save(comment);
	}

	@DeleteMapping("deleteComment")
	public void deleteComment(@RequestBody String commentId){
		commentRepository.deleteById(commentId);
	}
}
