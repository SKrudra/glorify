import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../userprofile';
import {UserService} from './../services/user/user.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public userProfiles: UserProfile[];
 
  constructor(private http: HttpClient,
    private router: Router,private userService: UserService) { 
    this.userService.getAllUser().subscribe(
      data =>
      {
        this.userProfiles = data;
      }
      );
  }
  ngOnInit() {
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    //console.log(event.option.value);
    alert(event.option.value);
    this.userService.userProfile.username = event.option.value;
    this.router.navigate(['/searchUserProfile']);
  }
}
