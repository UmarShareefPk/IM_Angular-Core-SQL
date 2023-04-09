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
    radialGradient: [0, 0, 0, 300],
    stops: [
      [0, 'rgba(193,163,56,1)'],
      [1, 'rgba(203,180,64,1)']
    ]
  };
  InProgresColor: any = {
    radialGradient: [0, 0, 0, 300],
    stops: [
      [0, 'rgba(47,108,235,1)'],
      [1, 'rgba(26,90,193,1)']
    ]
  };
  closedColor: any = {
    radialGradient: [0, 0, 0, 300],
    stops: [
      [0, 'rgba(66, 194, 56, 1)'],
      [1, 'rgba(113, 200, 120, 1)']
    ]
  };
  approvedColor:any = {
    radialGradient:  [0, 0, 0, 300],
    stops: [
      [0, 'rgba(12, 99, 5, 1)'],
      [1, 'rgba(14, 131, 22, 1)']
    ]
  };
  LateColor:any = {
    radialGradient:  [0, 0, 0, 300],
    stops: [
      [0, 'rgba(172,42,40,1)'],
      [1, 'rgba(163,20,18,1)']
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
