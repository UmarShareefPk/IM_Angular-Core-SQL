import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CommonService } from '../../../common.service';
import swal from 'sweetalert2';
import { IncidentService } from '../../../services/incident.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input() incidentId:string = "";
  @Output() commentAdded = new EventEmitter();
  comment:string = "";
  files:any[] = [];
  filesText:string = "Upload files";

  constructor(public common:CommonService, private incidentService:IncidentService) { }

  ngOnInit(): void {
  }

  fileChange(event:any){
   this.files =  event.target.files;
   this.filesText = this.files.length+ ' file selected.';
  }

  saveComment(){
    this.comment = this.comment.trim();
    if (this.comment === "") {
      swal.fire("Comment cannot be empty.");
      return;
    }
    const formData = new FormData();

    if ( this.files[0]) {
      for (let i = 0; i < this.files.length; i++) {
        formData.append(
          "Attachment" + i + 1,
          this.files[i],
          this.files[i].name
        );
      }
    }
    formData.append("CommentText", this.comment.trim());
    formData.append("IncidentId", this.incidentId);
    formData.append("UserId", this.common.getLoggedInUser());
    this.incidentService.addNewComment(formData).subscribe(
      (m) => {
        console.log(m);
        this.commentAdded.emit(m);
        this.comment = "";
        this.files = [];
        this.filesText = "Upload files"
      },
      (err) => console.log(err)
    );
  }

}
