import { Component, OnInit } from '@angular/core';
import { MatInput } from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
  	private fb: FormBuilder
  ) { }
  
  form: FormGroup;

  ngOnInit() {
      this.form = this.fb.group({
          'username' : new FormControl('', Validators.required),
          'password' : new FormControl('', Validators.required)
      });
  }

    login() {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        console.log(username,password);    
    }
    
}
