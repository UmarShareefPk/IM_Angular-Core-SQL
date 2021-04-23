import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnChanges {

  @Input() comment:any = {};

  constructor(public common:CommonService) { }

  ngOnInit(): void {
    //console.log(this.comment);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("ng changes");
  }


}
