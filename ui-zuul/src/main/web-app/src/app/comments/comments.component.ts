import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CommentDetails} from '../commentdetails';

export interface CommentData {
  comment: string;
}

const COMMENTS: CommentData[] = [
  {comment: 'Yahoo'}, {comment:'google'}, {comment:'microsoft'}, {comment:'facebook'}, {comment:'instagram'}, {comment:'whatsApp'}, {comment:'twitter'}
];
   commentDetails:CommentDetails;
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {displayedColumns: string[] = ['comment'];
  dataSource: MatTableDataSource<any>;
   // dataSource =  new MatTableDataSource<CommentData>();



  constructor() {
    this.dataSource = new MatTableDataSource(COMMENTS);
      console.log(this.dataSource);
  }

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}