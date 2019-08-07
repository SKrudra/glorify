package com.microservice.comments.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservice.comments.entity.Comment;

@Repository
public interface CommentsRepository extends JpaRepository<Comment, Long> {
	List<Comment> findByCommentedOn(Long id);
}
