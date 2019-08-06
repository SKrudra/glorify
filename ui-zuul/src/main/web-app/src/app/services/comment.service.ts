import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Comment } from './../models/comment'; 

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }
  
  private zuulUrl = 'http://localhost:8001/api/comments/';  
    
  getAllCommentsOnUser(userId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.zuulUrl + 'allon/' + `${userId}`);
  }
}
