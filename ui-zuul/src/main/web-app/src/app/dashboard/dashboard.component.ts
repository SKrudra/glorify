import { Component, OnInit } from '@angular/core';
import {UserService} from './../services/user/user.service';
import { UserProfile } from '../userProfile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   public userProfile: UserProfile;
  constructor(public userService: UserService) {
    this.userProfile = this.userService.userProfile;
    
   }

  ngOnInit() {
    //this.userProfile = this.userService.getUser();
  }

}
