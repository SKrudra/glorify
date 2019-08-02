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
    
    private zuulUrl = 'http://localhost:8001/api/profile/';
    
    getProfile() : Observable<Profile> {
        const userId =  this.authService.getLoggedInUserId();
        return this.http.get<Profile>(this.zuulUrl + 'getprofile/' + `${userId}`);
    }
    
    getProfilesFromKeyword(keyword: string): Observable<Profile[]> {
            return this.http.get<Profile[]>(this.zuulUrl + 'getprofilesfromkeyword/' + `${keyword}`);
    }
}
