import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { SecurityContext } from './../models/securityContext';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  securityContext: SecurityContext;
    
  constructor(
    private authService: AuthService
  ) {
    
   }

  ngOnInit() {
    this.securityContext = this.authService.securityContext;
  }

}
