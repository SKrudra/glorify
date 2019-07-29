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
        return this.userService.login("http://localhost:8001/api/login-registration/validation/login",this.loginform)
         .subscribe(
            data => { 
            console.log(data);
            this.router.navigate(['/dashboard']);
            }, error => {
              console.log("Error", error);
          });
    }
    
    
}
