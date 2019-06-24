package com.glorify.profile.model;

import java.util.List;

import javax.persistence.GeneratedValue;
import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "UserProfile")
public class UserProfile {
	@Id
	@GeneratedValue
	private String id;
	private String fname;
	private String lname;
	private String email;
	private String userName;
	private String password;
	Long likes;
	Long followed;
	List<UserProfile> followers;
	
	
	@Override
	public String toString() {
		return "UserProfile [id=" + id + ", fname=" + fname + ", lname=" + lname + ", email=" + email + ", username="
				+ userName + ", password=" + password + "]";
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return userName;
	}
	public void setUsername(String username) {
		this.userName = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
