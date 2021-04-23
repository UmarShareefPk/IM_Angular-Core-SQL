import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment:any = {};


  commentText:string = "";
  commentEditText:string = "";
  commentEdit:boolean = false;

  constructor(public common:CommonService) { }

  ngOnInit(): void {
    //console.log(this.comment);
    this.commentText = this.comment.CommentText;
  }

  commentEditClick(show:boolean){
    if(show)
      this.commentEdit = true;
    else
      this.commentEdit = false;
  }


}
