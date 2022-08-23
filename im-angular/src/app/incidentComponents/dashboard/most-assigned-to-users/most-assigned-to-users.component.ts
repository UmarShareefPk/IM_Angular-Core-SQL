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
  color1:any = {
    linearGradient:  [0, 0, 0, 300],
    stops: [
        [0, 'rgba(255,114,0,1)'],
        [1, 'rgba(183,28,28,1)']           
    ]
  };
  color2:any = {
    linearGradient:  [0, 0, 0, 300],
    stops: [
        [0, 'rgba(255,127,0,1)'],
        [1, 'rgba(229,57,53,1)']           
    ]
  };
  color3:any = {
    linearGradient:  [0, 0, 0, 300],
    stops: [
        [0, 'rgba(255,127,0,1)'],
        [1, 'rgba(239,83,80,1)']           
    ]
  };
  color4:any = {
    linearGradient:  [0, 0, 0, 300],
    stops: [
        [0, 'rgba(230,255,46,1)'],
        [1, 'rgba(160,157,53,1)']           
    ]
  };
  color5:any = {
    linearGradient:  [0, 0, 0, 300],
    stops: [
        [0, 'rgba(104,255,38,1)'],
        [1, 'rgba(46,139,44,1)']           
    ]
  };


  constructor(private dashboardService:DashboardServiceService) {}

  ngOnInit(): void {
    this.dashboardService.getMostAssignedToUsersData().subscribe((m:any)=>{
      this.mostAssignedIncidentsData =  [
        { name: m[0].Name, y: parseInt(m[0].Count), color:this.color1 },
        { name: m[1].Name, y: parseInt(m[1].Count), color:this.color2 },
        { name: m[2].Name, y: parseInt(m[2].Count), color:this.color3 },
        { name: m[3].Name, y: parseInt(m[3].Count), color:this.color4 },
        { name: m[4].Name, y: parseInt(m[4].Count), color:this.color5 }
    ];
      this.drawChart();
    })
  }

  drawChart(): any {
    this.chart = new Chart({

      chart: {
        type: 'bar',
       
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
