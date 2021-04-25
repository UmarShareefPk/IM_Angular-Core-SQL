import { Component, Input, OnChanges, OnInit, SimpleChanges,Output, EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';
import { IncidentService } from '../incident.service';
import swal from 'sweetalert2';


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

  @Output() commentChanged:any = new EventEmitter();
  @Output() commentDeleted:any = new EventEmitter();

  constructor(public common:CommonService, private incidentService:IncidentService) { }

  ngOnInit(): void {
    this.commentText = this.commentEditText = this.comment.CommentText;
  }

  commentEditClick(show:boolean){
    if(show)
      this.commentEdit = true;
    else
      this.commentEdit = false;
  }

  commentEditSave(){
    this.commentEditText = this.commentEditText.trim();

    if(this.commentEditText === ""){
      swal.fire("Comment text cannot be empty");
      return;
    }

    let changedComment = {
      Id : this.comment.Id,
      IncidentId : this.comment.incidentId,
      UserId : this.common.getLoggedInUser(),
      CreateDate : new Date(),
      CommentText : this.commentEditText,
      attachments :[]
    };

    this.incidentService.updateComment(changedComment).subscribe(
      (m) => {
        this.commentText = this.commentEditText;
        this.commentEdit = false;
        this.commentChanged.emit(changedComment)
      },
      (err) => console.log(err)
    );
  }

  downloadFile(file:any){
    this.incidentService.downloadFile( "comment" ,this.comment.Id, this.comment.IncidentId, file);
  }

  deleteFile(file:any){

      swal
        .fire({
          title: 'Are you sure?',
          text: 'Are you sure you want to delete this file.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.incidentService
              .deleteAttachment(
                'comment',
                this.comment.Id,
                this.comment.IncidentId,
                this.common.getLoggedInUser(),
                file
              )
              .subscribe(
                (m) => {
                  let attachments = [ ...this.comment.attachments ];
                  this.comment.attachments = attachments.filter(
                    (cfile: any) => cfile.Id !== file.Id
                  );
                },
                (err) => console.log(err)
              );
          }
        });
  }

   deleteComment()  {
    swal
      .fire({
        title: 'Are you sure?',
        text: 'Are you sure you want to delete this comment.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.incidentService
            .deleteComment(
              this.comment.Id,
              this.comment.IncidentId,
              this.common.getLoggedInUser()
            )
            .subscribe(
              (m) => {
                console.log('m', m);
                this.commentDeleted.emit(this.comment.Id);
              },
              (err) => console.log(err)
            );
        }
      });
  }

} // end of class
