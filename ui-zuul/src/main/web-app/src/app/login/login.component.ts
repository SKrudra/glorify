import {Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { UserProfile } from '../userprofile';
import {UserService} from './../services/user/user.service';
  

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
    ) { 
      this.userService.userProfile = this.userProfile;
   }
  
  private loginform: FormGroup;
  private userProfile: UserProfile;
  

  ngOnInit() {
      this.loginform= this.fb.group({
          'username' : new FormControl('', Validators.required),
          'password' : new FormControl('', Validators.required)
      });   
  }
  
    login() {
         return this.userService.login("http://localhost:8001/api/user-profile/userprofile/getUserProfileByName",this.loginform)
         .subscribe(
         data => { 
        this.userService.userProfile = data;
        this.router.navigate(['/dashboard']);
        }, error => {
          console.log("Error", error);
      });
    }
    
    
}
