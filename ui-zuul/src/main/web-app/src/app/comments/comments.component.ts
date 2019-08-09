import { Component, OnInit } from '@angular/core';
import { CommentService } from './../services/comment.service';
import { AuthService } from './../services/auth.service';
import { Comment } from './../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(
    private commentService: CommentService,
    private authService: AuthService,
  ) { 
    this.myComment.id = 99;
    this.myComment.description = 'Yahoo';
    this.myComment.commentedBy = 4;
      this.myComment.commentedOn = 1;
      this.myComment.isPrivate = false;
      this.myComment.parentId = null;
      this.myComment.upvotes = 1;
      this.myComment.downvotes = 2;
  }
    
    comments: Comment[];
    
    myComment = new Comment();

  ngOnInit() {
      const userId = this.authService.getLoggedInUserId();
      this.commentService.getAllCommentsOnUser(userId).subscribe(
        data => {
            let self = this;
            this.comments = data;
            let element = document.getElementById("scrollDiv"); 
            element.addEventListener('scroll', function(event)
            {
                let element = document.getElementById("scrollDiv"); 
                //console.log(Math.floor(element.scrollHeight - element.scrollTop- element.clientHeight));
                if (Math.floor(element.scrollHeight - element.scrollTop - element.clientHeight) <=0) //see glorify doc -> learnings -> infinite scroll
                {
                    self.getAllCommentsOnUser();
                }
            });
        }
      )      
  }
  
  getAllCommentsOnUser(): void {
    this.comments.push(this.myComment);      
  }

}
