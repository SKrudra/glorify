import {Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { UserProfile } from '../userprofile';
import {AuthService} from './../services/auth.service';
import { MatSnackBar } from '@angular/material';

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
    public authService:AuthService,
    private snackbar: MatSnackBar
    ) { 
   }
  
  private loginform: FormGroup;
  

  ngOnInit() {
      this.loginform= this.fb.group({
          'email' : new FormControl('', Validators.required),
          'password' : new FormControl('', Validators.required)
      });   
  }
  
    login() {
        return this.authService.login("http://localhost:8001/api/login-registration/validation/login",this.loginform)
         .subscribe(
            data => { 
            if(data != -1) this.router.navigate(['/dashboard']);
            else this.snackbar.open('Login failed', 'Failed', { duration: 5000, });
            }, error => {
              console.log("Error", error);
          });
    }
    
    
}
