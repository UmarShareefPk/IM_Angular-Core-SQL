import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentService } from '../incident.service';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-incident-listing',
  templateUrl: './incident-listing.component.html',
  styleUrls: ['./incident-listing.component.css'],
})
export class IncidentListingComponent implements OnInit {

pageSize:Number = 5;
pageNumber:Number = 5;
totalRecords:Number = 0;
incidents:any[] = [];
search:string = "";

  constructor(
    private router: Router,
    private incidentService: IncidentService
  ) {}

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents(){
    this.incidentService.getIncidentsWithPage(this.pageSize, this.pageNumber, '', '', this.search).subscribe(
      (m: any) => {
        this.incidents = m.Incidents;
        this.totalRecords = m.Total_Incidents;
      },
      (error: any) => console.log('error', error)
    );
  }

  pageNumberChanged(pageNumber:any){
    this.pageNumber  = pageNumber;
    this.loadIncidents();
  }

  titleClick(id: string) {
    alert(id);
    //this.router.navigate(['/incidentDetails', id]);
  }

  getMoment(datetime:any):Moment{
    let myMoment: moment.Moment = moment(datetime);
    return myMoment;
  }

  statusName(status:string):string{
    switch(status){
      case "N":
        return "New";
      case "C":
        return "Close";
      case "A":
        return "Approved";
      case "I":
        return "In Progress";
      default:
        return status;
    }
  }

  getUserNameById(id:string):any {

    let allUsers:any[] = JSON.parse(localStorage.getItem("allUsers") || '{}');
    let user = allUsers.find((user) => {
        return user.Id === id;
    });
    return user.FirstName + " " + user.LastName;
  }

}
