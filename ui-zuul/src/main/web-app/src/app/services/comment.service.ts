import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Comment } from './../models/comment';
import { AuthService } from './auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.newCommentObserver.subscribe(comment => this.newComment = comment);    
  }
  
  private zuulUrl = 'http://localhost:8001/api/comments/';
  newComment: Comment;
  newCommentObserver: Subject<Comment> = new Subject<Comment>();
    
  createComment(comment: string, isPrivate: boolean, userId: number): Comment {
    let newComment = new Comment();
    newComment.description = comment;
    newComment.commentedBy = this.authService.getLoggedInUserId();
    newComment.commentedOn = userId; 
    newComment.isPrivate = isPrivate;
    newComment.upvotes = 0;
    newComment.downvotes = 0;    
    return newComment;
  }
    
  getAllCommentsOnUser(userId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.zuulUrl + 'allon/' + `${userId}`);
  }
    
  writeComment(comment: string, isPrivate: boolean, userId: number) {
    let newComment = this.createComment(comment,isPrivate,userId);
    return this.http.post<boolean>(this.zuulUrl + 'writecomment', newComment);    
  }
  
  addNewComment(comment: string, isPrivate: boolean, userId: number) {
    let newComment = this.createComment(comment,isPrivate,userId);
    this.newCommentObserver.next(newComment);  
  }  
}
