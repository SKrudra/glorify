package com.glorify.profile.entity;

import javax.persistence.*;

import lombok.Data;

import java.util.List;

@Entity
@Table(name = "PROFILE")
public @Data class Profile {

	@Id @GeneratedValue
	@Column(name="ID")
	private Long id;

	@Column(name="USERID")
	private Long userId;

	@Column(name="FIRSTNAME")
	private String firstName;

	@Column(name="LASTNAME")
	private String lastName;

	@Column(name="AGE")
	private Long age;

	@Column(name="GENDER")
	private Long gender;

	@Column(name="BIO")
	private String bio;

	@Lob
	@Column(name="PICTURE")
	private byte[] picture;

	@Column(name="LIKESCOUNT")
	private Long likesCount;

	@Column(name="FOLLOWERSCOUNT")
	private Long followersCount;

	@Column(name="FOLLOWINGSCOUNT")
	private Long followingsCount;

	@Column(name="VIEWSCOUNT")
	private Long viewsCount;

	@OneToMany
    @JoinColumn(name="FOLLOWID", referencedColumnName = "ID")
    private List<Profile> followedList;

}

