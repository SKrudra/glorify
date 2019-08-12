import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { CommentService } from './../services/comment.service';

@Component({
  selector: 'app-writecomment',
  templateUrl: './writecomment.component.html',
  styleUrls: ['./writecomment.component.css']
})
export class WritecommentComponent implements OnInit {

  constructor(
    private commentService: CommentService,
  ) { }
    
  myComment = new FormControl();  
    
  ngOnInit() {
      
  }
  
  submit(isPrivate: boolean) {
        this.commentService.writeComment(this.myComment.value,isPrivate,1).subscribe(
            error => console.log("Error: ",error)
        );
  }

}
