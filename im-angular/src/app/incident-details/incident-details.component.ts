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
  startDate:string = "";
  duetDate:string = "";

  title:string = "";
  titleEditText:string = "";
  titleEdit:boolean = false;

  description:string = "";
  descriptionEditText:string = "";
  descriptionEdit:boolean = false;

  addtionalData:string = "";
  addtionalDataEditText:string = "";
  addtionalDataEdit:boolean = false;

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
    this.title = this.incident.Title;
    this.status = this.incident.Status;
    this.startDate= this.incident.StartTime;
    this.duetDate = this.incident.DueDate;
    this.description = this.incident.Description;
    this.addtionalData = this.incident.AdditionalData;
  }

  assigneeChanged(newAssignee:any){
    alert(this.common.getUserNameById(newAssignee));
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
    this.startDateEdit =false;
  }

  dueDateEditClick(show:boolean){
  this.sweet();
    if(show)
      this.dueDateEdit = true;
    else
      this.dueDateEdit = false;
  }

  dueDateChanged(){
    this.dueDateEdit =false;
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
