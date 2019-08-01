import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Profile } from './../models/profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }
    
    private zuulUrl = 'http://localhost:8001/api/';
    private profileUrl = 'profile/getprofile/';
    
    getProfile() : Observable<Profile> {
        const userId =  this.authService.getLoggedInUserId();
        return this.http.get<Profile>(this.zuulUrl + this.profileUrl + `${userId}`);
    }
}
