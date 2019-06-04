import {Component, OnInit, Output } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { UserProfile } from '../userprofile';
import {UserService} from './../services/user.service';
  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public userService:UserService
  ) { }
  
  form1: FormGroup;
  userProfile: UserProfile;
  

  ngOnInit() {
      this.form1= this.fb.group({
          'username' : new FormControl('', Validators.required),
          'password' : new FormControl('', Validators.required)
      });
     // this.userProfile = this.userService.getUser();
      
  }
  
    login() {
         //this.userService.login("http://localhost:8080/api/userprofile/getUserProfileByName",this.form1);
         return this.http.post<UserProfile>("http://localhost:8080/api/userprofile/getUserProfileByName",this.form1.value).subscribe(
      res => { 
        console.log("res", res); 
        this.router.navigate(['/dashboard']);
        }, error => {
          console.log("Error", error);
      });
    }
    
    
}
