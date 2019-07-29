import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/userprofile';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  public userProfile: UserProfile = new UserProfile();
  constructor(private http:HttpClient, private router: Router) { 
  }

  login(url:string,form:FormGroup): Observable<UserProfile> { 
    console.log(form.value);
   return this.http.post<UserProfile>(url,form.value);
  }

  getUser(userName: string):UserProfile{
    this.userProfile.username = "shivam";
    this.userProfile.fname = ("satyam");
    this.userProfile.lname = "shivam";
    return this.userProfile;
  }

  getAllUser():Observable<any>{
    return this.http.get<UserProfile>("http://localhost:8001/api/user-profile/userprofile/getAllUserProfiles");
  }
}
