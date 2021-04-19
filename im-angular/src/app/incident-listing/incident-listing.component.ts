import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident-listing',
  templateUrl: './incident-listing.component.html',
  styleUrls: ['./incident-listing.component.css']
})
export class IncidentListingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  titleClick(id:string){
    this.router.navigate(['/incidentDetails', id]);
  }

}
