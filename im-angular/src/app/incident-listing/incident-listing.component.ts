import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentService } from '../incident.service';
import * as moment from 'moment';
import { Moment } from 'moment';
import { CommonService } from '../common.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-incident-listing',
  templateUrl: './incident-listing.component.html',
  styleUrls: ['./incident-listing.component.css'],
})
export class IncidentListingComponent implements OnInit, OnDestroy  {

protected ngUnsubscribe: Subject<void> = new Subject<void>();
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
  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}

  loadIncidents(){
    this.incidentService.getIncidentsWithPage(this.pageSize, this.pageNumber, '', '', this.search)
    .pipe( takeUntil(this.ngUnsubscribe) )
    .subscribe(
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
