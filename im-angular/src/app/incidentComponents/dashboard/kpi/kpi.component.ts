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
    switch (this.text.toLowerCase().replace(" ", "")) {
      case 'new':
        this.kpiClass = 'kpi new-color';
        break;
      case 'inprogress':
        this.kpiClass = 'kpi inprogress-color';
        break;
      case 'closed':
        this.kpiClass = 'kpi closed-color';
        break;
      case 'approved':
        this.kpiClass = 'kpi approved-color';
        break;
      case 'late':
        this.kpiClass = 'kpi late-color';
        break;

      default:
        this.kpiClass = 'kpi assignedToMe-color';
        break;
    }
  }

}
