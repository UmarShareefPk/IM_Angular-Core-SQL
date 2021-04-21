import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentService } from '../incident.service';

@Component({
  selector: 'app-incident-listing',
  templateUrl: './incident-listing.component.html',
  styleUrls: ['./incident-listing.component.css']
})
export class IncidentListingComponent implements OnInit {

  constructor(private router: Router, private incidentService:IncidentService) { }

  ngOnInit(): void {
    this.incidentService.getIncidentsWithPage(10,1,"","").subscribe((m:any)=>{
      console.log("data : ",m);
    },
    (error:any) => console.log("error",error)
    )
  }

  titleClick(id:string){
    this.router.navigate(['/incidentDetails', id]);
  }

}
