import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-oldest-open',
  templateUrl: './oldest-open.component.html',
  styleUrls: ['./oldest-open.component.css']
})
export class OldestOpenComponent implements OnInit {

  constructor(private dashboardService:DashboardServiceService, public commonService:CommonService,   private router: Router) { }

  incidents:any = [];

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents():any{

    this.dashboardService.getOldest5UnresolvedData().subscribe((m:any)=>{
      this.incidents = m;
      console.log(m);
    })
  }

  titleClick(id: string) {
    this.router.navigate(['/incidentDetails', id]);
  }

}
