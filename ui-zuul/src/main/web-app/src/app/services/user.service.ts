import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../userProfile';
import { FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  public userProfile: UserProfile = new UserProfile();
  constructor(private http:HttpClient, private router: Router) { 
  }

  login(url:string,form:FormGroup): Observable<UserProfile> { 
   return this.http.post<UserProfile>(url,form.value);
  }

  getUser():UserProfile{
    this.userProfile.username = "shivam";
    this.userProfile.fname = ("satyam").toUpperCase();
    this.userProfile.lname = "shivam";
    return this.userProfile;
  }

  getAllUser():Observable<any>{
    return this.http.get<UserProfile>("http://localhost:8080/api/userprofile/getAllUserProfiles");
  }
}
