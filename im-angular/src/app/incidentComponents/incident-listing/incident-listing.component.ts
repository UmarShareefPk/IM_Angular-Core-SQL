import { ChangeDetectorRef, Component, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentService } from '../../services/incident.service';
import { CommonService } from '../../services/common.service';
import { map, takeUntil } from 'rxjs/operators';

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
  newincident(){
    this.router.navigate(['/newIncident']);
  }

  loadIncidents(){
    if(this.request)
       this.request.unsubscribe();
    this.incidents = [];
   this.status = "loading";

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
    this.router.navigate(['/incidentDetails', id]);
  }

  dueDateClass(dueDate:string, status:string){
    if(status == "C" || status =="A")
      return "";

     if(new Date(dueDate) < (new Date()) )
       return "text-danger";

    return "text-warning";
  }

}
