import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserProfile } from '../userprofile';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private http1: HttpClient,private router:Router) { }
    form: FormGroup;
    userPrfile: UserProfile;
  ngOnInit() {
    this.form = this.fb.group({
      'fname' : new FormControl('', Validators.required),
      'lname' : new FormControl('', Validators.required),
      'username' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required),
      'email' : new FormControl('', Validators.required)
  });
  }
  
  register() {
    const fname = this.form.get('fname').value;
    const lname = this.form.get('lname').value;
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    const email = this.form.get('email').value;
    console.log(username,password,fname,lname,email);
    return this.http1.post<UserProfile>("http://localhost:8080/api/userprofile/createUser",this.form.value).subscribe(
      res => { // * not callback
    console.log("res", {res}); 
    this.userPrfile=res;
    this.router.navigate(['/login']);
    }, error => {
      console.log("Error", error);
    });
       
}

}