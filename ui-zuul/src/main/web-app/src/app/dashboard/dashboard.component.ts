import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user/user.service';
import { UserProfile } from '../userProfile';
import { AuthService } from './../services/auth.service';
import { SecurityContext } from './../models/securityContext';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  public userProfile: UserProfile;
  securityContext: SecurityContext;
    
  constructor(
    public userService: UserService,
    private authService: AuthService
  ) {
    this.userProfile = this.userService.userProfile;
   }

  ngOnInit() {
    this.securityContext = this.authService.securityContext;
  }

}
