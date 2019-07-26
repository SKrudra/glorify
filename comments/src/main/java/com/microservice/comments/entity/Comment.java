package com.microservice.comments.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "COMMENTS")
public @Data class Comment {
	@Id @GeneratedValue
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "DESCRIPTION")
	private String description;
	
	@Column(name = "COMMENTED_BY")
	private Long commentedBy;
	
	@Column(name = "COMMENTED_ON")
	private Long commentedOn;
	
	@Column(name = "IS_PRIVATE")
	private Boolean isPrivate;
	
	@Column(name = "PARENT_ID")
	private Long parentId;
	
	@Column(name = "UPVOTES")
	private Long upvotes;
	
	@Column(name = "DOWNVOTES")
	private Long downvotes;
}
