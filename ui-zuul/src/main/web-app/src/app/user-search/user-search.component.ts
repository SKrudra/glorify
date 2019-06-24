import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../services/user/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  private username: string;
  private searchUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private httpClient: HttpClient,
    private router: Router,
    private userService: UserService) { 
    this.username = this.userService.userProfile.username;
  }

  ngOnInit() {
    this.searchUserForm = this.formBuilder.group({
      'writecomment' : new FormControl('', Validators.required),
      'view' : new FormControl('', Validators.required),
      'username' : new FormControl('',Validators.nullValidator)
    });
  }

  postComments():Observable<any>{
    
    return this.httpClient.post("https://localhost:8001/api/comments/comments/createComment",this.searchUserForm.value);
  }
}
