import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { IncidentService } from '../incident.service';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css'],
})
export class IncidentDetailsComponent implements OnInit {
  incident: any = {};
  status: string = 'N';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private incidentService: IncidentService,
    public common: CommonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.incidentService.getIncidentById(id || '').subscribe(
        (m) => {
          this.incident = m;
          this.setFields();
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  setFields() {
    this.status = this.incident.Status;
  }

}
