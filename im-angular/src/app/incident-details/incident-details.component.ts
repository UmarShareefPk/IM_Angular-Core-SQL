import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { IncidentService } from '../incident.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css'],
})
export class IncidentDetailsComponent implements OnInit {
  incident: any = {};
  status: string = 'N';


  title:string = "";
  titleEditText:string = "";
  titleEdit:boolean = false;

  description:string = "";
  descriptionEditText:string = "";
  descriptionEdit:boolean = false;

  addtionalData:string = "";
  addtionalDataEditText:string = "";
  addtionalDataEdit:boolean = false;

  startDate:string = "";
  dueDate:string = "";
  startDateEdit:boolean = false;
  dueDateEdit:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incidentService: IncidentService,
    public common: CommonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.incidentService.getIncidentById(id || '').subscribe(
        (m) => {
          this.incident = m;
          this.setFields();
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  setFields() {
    this.title = this.titleEditText = this.incident.Title;
    this.description = this.descriptionEditText = this.incident.Description;
    this.addtionalData = this.addtionalDataEditText = this.incident.AdditionalData;
    this.status = this.incident.Status;
    this.startDate= this.incident.StartTime;
    this.dueDate = this.incident.DueDate;
  }

  downloadFile(file:any){
    this.incidentService.downloadFile( "incident" ,"", this.incident.Id, file);
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
                'incident',
                '',
                this.incident.Id,
                this.common.getLoggedInUser(),
                file
              )
              .subscribe(
                (m) => {
                  let changedincident = { ...this.incident };
                  changedincident.Attachments = changedincident.Attachments.filter(
                    (ifile:any) => ifile.Id !== file.Id
                  );
                  this.incident = changedincident;
                },
                (err) => console.log(err)
              );
          }
        });
  }

  statusChanged(event:any){
    this.updateIncidentByField("Status", this.status);
  }

  assigneeChanged(newAssignee:any){
    this.updateIncidentByField("AssignedTO", newAssignee);
  }

  titleEditClick(show:boolean){
    if(show)
      this.titleEdit = true;
    else
      this.titleEdit = false;
  }

  descriptionEditClick(show:boolean){
    if(show)
      this.descriptionEdit = true;
    else
      this.descriptionEdit = false;
  }

  addtionalDataEditClick(show:boolean){
    if(show)
      this.addtionalDataEdit = true;
    else
      this.addtionalDataEdit = false;
  }

  startDateEditClick(show:boolean){
    if(show)
      this.startDateEdit = true;
    else
      this.startDateEdit = false;
  }

  startDateChanged(){
    if(!this.common.getMoment(this.startDate).isValid()){
      swal.fire("Invalid Date.");
      this.startDate = this.incident.StartTime;
    }
    else{
        this.updateIncidentByField("StartTime", this.startDate);
        this.startDateEdit =false;
    }
  }

  dueDateEditClick(show:boolean){
    if(show)
      this.dueDateEdit = true;
    else
      this.dueDateEdit = false;
  }

  dueDateChanged(){
    if(!this.common.getMoment(this.dueDate).isValid()){
      swal.fire("Invalid Date.");
      this.dueDate = this.incident.DueDate;
    }
    else{
        this.updateIncidentByField("DueDate", this.dueDate);
        this.dueDateEdit =false;
    }
  }

  updateIncident(source:string){
    switch (source) {
      case 'title':
        this.titleEditText = this.titleEditText.trim();
        if(this.titleEditText == ""){
          swal.fire("Title cannot be empty.");
        break;
        }
        this.updateIncidentByField('Title', this.titleEditText);
        this.title = this.titleEditText;
        this.titleEdit = false;
        break;
      case 'description':
        this.descriptionEditText = this.descriptionEditText.trim();
        if(this.descriptionEditText == ""){
          swal.fire("Description cannot be empty.");
        break;
        }
        this.updateIncidentByField('Description', this.descriptionEditText);
        this.description = this.descriptionEditText;
        this.descriptionEdit = false;
        break;
      case 'additionalData':
        this.addtionalDataEditText = this.addtionalDataEditText.trim();
        this.updateIncidentByField('AdditionalData', this.addtionalDataEditText);
        this.addtionalData = this.addtionalDataEditText;
        this.addtionalDataEdit = false;
        break;

      default:
        break;
    }
  }

  updateIncidentByField(field:string , value:string) {
    let parameters = {
      IncidentId : this.incident.Id,
      Parameter : field,
      Value : value,
      UserId : this.common.getLoggedInUser()
    };
    this.incidentService.updateIncident(parameters).subscribe(
      (m) => m,
      (err) => console.log(err)
    );
  }

  commentAdded(newComment:any){
    console.log("newcomment" , newComment);
    let changedincident = { ...this.incident };
    changedincident.Comments = [newComment].concat(
      changedincident.Comments
    );
    this.incident = changedincident;
  }

  commentChanged(comment:any){
    //console.log(comment);
    // no implementation needed so far
  }

  commentDeleted(commentId:string){
    console.log(commentId);
    let changedincident = { ...this.incident };
         changedincident.Comments = changedincident.Comments.filter(
           (comment:any) => comment.Id !== commentId
         );
    this.incident = changedincident;
  }

  sweet(){
    swal.fire("hi");
    swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    );
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

}
