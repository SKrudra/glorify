import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { CommentService } from './../services/comment.service';
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-writecomment',
  templateUrl: './writecomment.component.html',
  styleUrls: ['./writecomment.component.css']
})
export class WritecommentComponent implements OnInit {

  constructor(
    private commentService: CommentService,
    private searchService: SearchService,
  ) { }
    
  myComment = new FormControl();  
    
  ngOnInit() {
      
  }
  
  submit(isPrivate: boolean) {
        this.commentService.writeComment(this.myComment.value,isPrivate,this.searchService.searchedUserId).subscribe(
            res => {this.commentService.addNewComment(this.myComment.value,isPrivate,this.searchService.searchedUserId);},
            error => console.log("Error: ",error)
        );
  }

}
