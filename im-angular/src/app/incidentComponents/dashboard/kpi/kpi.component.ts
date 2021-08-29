import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent implements OnInit {

  @Input() text:string = "";
  @Input() value:number = 0;

  kpiClass:string = "";

  constructor() { }

  ngOnInit(): void {
    switch (this.text.toLowerCase()) {
      case 'new':
        this.kpiClass = 'kpi status-new-bg-color';
        break;
      case 'inprogress':
        this.kpiClass = 'kpi status-inprogress-bg-color';
        break;
      case 'closed':
        this.kpiClass = 'kpi status-closed-bg-color';
        break;
      case 'approved':
        this.kpiClass = 'kpi status-approved-bg-color';
        break;
      case 'late':
        this.kpiClass = 'kpi status-late-bg-color';
        break;

      default:
        this.kpiClass = 'kpi';
        break;
    }
  }

}
