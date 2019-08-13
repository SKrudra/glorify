import { Component, OnInit } from '@angular/core';
import { Profile } from './../models/profile';
import { ProfileService } from './../services/profile.service';
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private profileService: ProfileService,
    private searchService: SearchService,
  ) { 
    this.profileService.getLoggedInProfile().subscribe(
        data => {
            this.loginProfile = data;    
        }
    );
  }

  loginProfile: Profile;  
    
  ngOnInit() {
      
      this.searchService.searched.subscribe(userId => {
            this.profileService.getProfile(userId).subscribe(
                data => {
                    this.loginProfile = data;    
                }
              );        
      });
  }  

}
