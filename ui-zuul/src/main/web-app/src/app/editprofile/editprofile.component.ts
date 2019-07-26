import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
userName;
  
  constructor(private route: ActivatedRoute, private userService: UserService) { 
    //this.userName = this.userService.userProfile.username;
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.userName = params.get('username');
      alert(this.userName);
    });
  }

}
