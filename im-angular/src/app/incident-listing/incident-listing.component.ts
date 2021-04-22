import { ChangeDetectorRef, Component, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentService } from '../incident.service';
import * as moment from 'moment';
import { Moment } from 'moment';
import { CommonService } from '../common.service';
import { map, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-incident-listing',
  templateUrl: './incident-listing.component.html',
  styleUrls: ['./incident-listing.component.css'],
})
export class IncidentListingComponent implements OnInit  {

request: any; // to cancel previous requests
status:string = "loading"; //loading, error, noData

pageSize:number = 5;
pageNumber:number = 1;
totalRecords:number = 0;
incidents:any[] = [];
search:string = "";

  constructor(
    private router: Router,
    private incidentService: IncidentService,
    public commonService:CommonService
  ) {}


  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents(){
    if(this.request)
       this.request.unsubscribe();
    this.incidents = [];
    this.status = "Loading";


    this.request =  this.incidentService.getIncidentsWithPage(this.pageSize, this.pageNumber, '', '', this.search)
    .pipe(map(m => {this.status = ""; return m}))
    .subscribe(
      (m: any) => {
        this.incidents = m.Incidents;
        this.totalRecords = m.Total_Incidents;
        if(this.totalRecords === 0)
          this.status = "noData";
        else
          this.status = "";
      },
      (error: any) => {
        this.status="error";
      }
    );
  }

  pageNumberChanged(pageNumber:any){
    this.pageNumber  = pageNumber;
    this.loadIncidents();
  }

  pageSizeChanged(pageSize:any){
    this.pageSize  = pageSize;
    this.pageNumber = 1;
    this.loadIncidents();
  }

  searchChanged(event:any){
    let text = event.target.value;
    this.pageNumber = 1;
    this.search = text;
    this.loadIncidents();
  }

  titleClick(id: string) {
    alert(id);
    //this.router.navigate(['/incidentDetails', id]);
  }

}
