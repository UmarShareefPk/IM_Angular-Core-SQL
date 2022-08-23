import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardServiceService } from 'src/app/services/dashboard-service.service';

@Component({
  selector: 'app-overall-widget',
  templateUrl: './overall-widget.component.html',
  styleUrls: ['./overall-widget.component.css'],
})
export class OverallWidgetComponent implements OnInit {
  chart: any;
  overallWidgetData:any;
  newColor: any = {
    linearGradient: [0, 0, 0, 300],
    stops: [
      [0, 'rgba(245,124,0,1)'],
      [1, 'rgba(255,226,0,1)']
    ]
  };
  InProgresColor: any = {
    linearGradient: [0, 0, 0, 300],
    stops: [
      [0, 'rgba(25,118,210,1)'],
      [1, 'rgba(0,237,255,1)']
    ]
  };
  closedColor: any = {
    linearGradient: [0, 0, 0, 300],
    stops: [
      [0, 'rgba(67,160,71,1)'],
      [1, 'rgba(0,255,187,1)']
    ]
  };
  approvedColor:any = {
    linearGradient:  [0, 0, 0, 300],
    stops: [
        [0, 'rgba(27,94,32,1)'],
        [1, 'rgba(19,255,0,1)']
    ]
  };
  LateColor:any = {
    linearGradient:  [0, 0, 0, 300],
    stops: [
        [0, 'rgba(183,28,28,1)'],
        [1, 'rgba(255,140,0,1)']
    ]
  };

  constructor(private dashboardService:DashboardServiceService) {}

  ngOnInit(): void {
    this.dashboardService.getOverallWidgetData().subscribe((m:any)=>{
      this.overallWidgetData = m;
      this.drawChart();
    })
  }

  drawChart(): any {
    this.chart = new Chart({
      chart: {
        type: 'pie',        
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        pointFormat:
          '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Share',
          data: [             
            { name: 'New', y: this.overallWidgetData.New,   color: this.newColor },
            { name: 'In Progress', y: this.overallWidgetData.InProgress, color: this.InProgresColor },
            { name: 'Closed', y: this.overallWidgetData.Closed, color: this.closedColor },
            { name: 'Approved', y: this.overallWidgetData.Approved, color: this.approvedColor },
            { name: 'Late', y: this.overallWidgetData.Late, color: this.LateColor }
          ],
        },
      ],
    });
  }
}
