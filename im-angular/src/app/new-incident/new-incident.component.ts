import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { IncidentService } from '../incident.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  title:string = "";
  assginee:string = "";
  description:string = "";
  addtionalDetails:string = "";
  startDate:string = "";
  dueDate:string = "";
  files:any = [];
  filesText:string = "Upload files";

  constructor(public common:CommonService, private incidentService:IncidentService) {

   }

  ngOnInit(): void {
  }

  assigneeChanged(assignee:any){
    this.assginee = assignee;
  }

  filesChange(event:any){

    this.files =  event.target.files;
    this.filesText = this.files.length+ ' file selected.';
   }

  startDateChanged(){
    if(!this.common.getMoment(this.startDate).isValid()){
      swal.fire("Invalid Date Start Date.");
      this.startDate = "";
    }
  }
  dueDateChanged(){
    if(!this.common.getMoment(this.dueDate).isValid()){
      swal.fire("Invalid Date Due Date.");
      this.dueDate = "";
    }
  }

  validate(){
    let error = "";
    this.title = this.title.trim();
    this.description = this.description.trim();
    this.addtionalDetails = this.addtionalDetails.trim();

    if (this.title === '')
      error = 'Title cannot be empty.';
    else if (this.assginee === '')
      error = 'Please select assignee.';
    else if (this.description === '')
      error = 'Description cannot be empty.';
    else if (!this.common.getMoment(this.startDate).isValid()) {
      error = 'Invalid Start Date';
    } else if (!this.common.getMoment(this.dueDate).isValid()) {
      error = 'Invalid Due Date';
    }

    if(error === "")
      return true;

    swal.fire({
      title: 'Invalid',
      text: error,
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Okay'
    }).then( m=> {

    } )
    return false;
  }

  saveIncident(){
    this.validate()
  }


}
