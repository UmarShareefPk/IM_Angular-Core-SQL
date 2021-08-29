import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';

@Component({
  selector: 'app-kpibar',
  templateUrl: './kpibar.component.html',
  styleUrls: ['./kpibar.component.css']
})
export class KpibarComponent implements OnInit {

  public value:number =150;
  public kpis:any = [];

  constructor(private dashboardService:DashboardServiceService) { }

  ngOnInit(): void {

    this.dashboardService.getkpiData().subscribe((m:any)=> {
     console.log("KPIs", m)
      this.kpis = m
    })
  }

}
