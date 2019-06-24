package com.microservice.comments.model;

import javax.persistence.GeneratedValue;

import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Comments")
public class Comments {
	@Id
	@GeneratedValue
	private String id;
	private String commentBy;
	private String commentTo;
	private String commentText;
	private Long upvotes;
	private Long downvotes;
	private Boolean view;
	private Long likes;
	
	@Override
	public String toString() {
		return "Comments [id=" + id + ", commentBy=" + commentBy + ", commentTo=" + commentTo + ", commentText="
				+ commentText + ", upvotes=" + upvotes + ", downvotes=" + downvotes + ", view=" + view + ", likes="
				+ likes + "]";
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCommentBy() {
		return commentBy;
	}
	public void setCommentBy(String commentBy) {
		this.commentBy = commentBy;
	}
	public String getCommentTo() {
		return commentTo;
	}
	public void setCommentTo(String commentTo) {
		this.commentTo = commentTo;
	}
	public String getCommentText() {
		return commentText;
	}
	public void setCommentText(String commentText) {
		this.commentText = commentText;
	}
	public Long getUpvotes() {
		return upvotes;
	}
	public void setUpvotes(Long upvotes) {
		this.upvotes = upvotes;
	}
	public Long getDownvotes() {
		return downvotes;
	}
	public void setDownvotes(Long downvotes) {
		this.downvotes = downvotes;
	}
	public Boolean getView() {
		return view;
	}
	public void setView(Boolean view) {
		this.view = view;
	}
	public Long getLikes() {
		return likes;
	}
	public void setLikes(Long likes) {
		this.likes = likes;
	}
	
	
}
