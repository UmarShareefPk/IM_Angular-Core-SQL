import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';

@Component({
  selector: 'app-most-assigned-to-users',
  templateUrl: './most-assigned-to-users.component.html',
  styleUrls: ['./most-assigned-to-users.component.css']
})
export class MostAssignedToUsersComponent implements OnInit {

  chart: any;
  mostAssignedIncidentsData:any;

  constructor(private dashboardService:DashboardServiceService) {}

  ngOnInit(): void {
    this.dashboardService.getMostAssignedToUsersData().subscribe((m:any)=>{
      this.mostAssignedIncidentsData =  [
        { name: m[0].Name, y: parseInt(m[0].Count), color:'#B71C1C' },
        { name: m[1].Name, y: parseInt(m[1].Count), color:'#E53935' },
        { name: m[2].Name, y: parseInt(m[2].Count), color:'#EF5350' },
        { name: m[3].Name, y: parseInt(m[3].Count), color:'#E57373' },
        { name: m[4].Name, y: parseInt(m[4].Count), color:'#FFCDD2' }
    ];
      this.drawChart();
    })
  }

  drawChart(): any {
    this.chart = new Chart({

      chart: {
        type: 'bar',
        height: (70) + '%',
        //width: (100) + '%',
       },
       title:{
          text:''
      },
      credits:
      {
          enabled: false
      },
      legend: {
          enabled: false
      },
      yAxis: {
          title: {
              text: ''
          }
      },

      xAxis: {
          type: 'category',
          min: 0,
          labels: {
              //animate: true
          }
      },

       series: [{
        name: '',
        type: 'bar',
        dataSorting: {
          enabled: true,
          sortKey: 'y'
      },
        data: this.mostAssignedIncidentsData
    }]
    });
  }

}
