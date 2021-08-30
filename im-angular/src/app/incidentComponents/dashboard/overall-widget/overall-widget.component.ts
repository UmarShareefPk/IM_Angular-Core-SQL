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
        height: 70 + '%',
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
            { name: 'New', y: this.overallWidgetData.New, color: '#F57C00' },
            { name: 'In Progress', y: this.overallWidgetData.InProgress, color: '#1976D2' },
            { name: 'Closed', y: this.overallWidgetData.Closed, color: '#43A047' },
            { name: 'Approved', y: this.overallWidgetData.Approved, color: '#1B5E20' },
            { name: 'Late', y: this.overallWidgetData.Late, color: '#B71C1C' }
          ],
        },
      ],
    });
  }
}
