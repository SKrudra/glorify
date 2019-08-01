import { Component, OnInit } from '@angular/core';
import { Profile } from './../models/profile';
import { ProfileService } from './../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private profileService: ProfileService,
  ) { }

  loginProfile: Profile;  
    
  ngOnInit() {
      this.profileService.getProfile().subscribe(
        data => {
            this.loginProfile = data;    
        }
      );
  }

}
