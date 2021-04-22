import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IncidentService } from '../incident.service';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css'],
})
export class IncidentDetailsComponent implements OnInit {

  incident : any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incidentService: IncidentService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.incidentService.getIncidentById(id || "")
      .subscribe(
        (m)=> {this.incident = m; }
        ,(err) => {console.log(err)}
        )
    });
  }

  auto_grow(event: any) {
    // for textareas
    let element = event.target;
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  }
}
