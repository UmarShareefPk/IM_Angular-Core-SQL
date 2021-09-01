import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last5',
  templateUrl: './last5.component.html',
  styleUrls: ['./last5.component.css']
})
export class Last5Component implements OnInit {

  constructor(private dashboardService:DashboardServiceService, public commonService:CommonService,   private router: Router) { }

  incidents:any = [];

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents():any{

    this.dashboardService.getLast5Data().subscribe((m:any)=>{
      this.incidents = m;
      console.log(m);
    })

  }

  titleClick(id: string) {
    this.router.navigate(['/incidentDetails', id]);
  }

}
