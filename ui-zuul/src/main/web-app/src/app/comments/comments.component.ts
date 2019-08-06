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
  ) { }
    
    comments: Comment[];

  ngOnInit() {
      const userId = this.authService.getLoggedInUserId();
      this.commentService.getAllCommentsOnUser(userId).subscribe(
        data => {
            this.comments = data;
            let element = document.getElementById("scrollDiv"); 
            element.addEventListener('scroll', function(event)
            {
                let element = document.getElementById("scrollDiv"); 
                if (element.scrollHeight - element.scrollTop >=0)
                {
                    console.log(Math.floor(element.scrollHeight - element.scrollTop- element.clientHeight));
                }
            });
        }
      );
      
  }

}
