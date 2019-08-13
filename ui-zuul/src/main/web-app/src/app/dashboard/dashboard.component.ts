import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { SecurityContext } from './../models/securityContext';
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  securityContext: SecurityContext;
  isHomepage: boolean;  
    
  constructor(
    private authService: AuthService,
    private searchService: SearchService,
  ) {
        this.isHomepage = true;
   }

  ngOnInit() {
    this.securityContext = this.authService.securityContext;
    this.searchService.searched.subscribe(userId => {
        if(userId!=-1) this.isHomepage = false;                
    });
  }
    
  myLogout() {
    this.authService.logout();    
  }
    
}
