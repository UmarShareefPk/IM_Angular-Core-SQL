import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css'],
})
export class IncidentDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      // this.departmentId = id;
     // alert(id);
    });
  }

  auto_grow(event:any) {
    // for textareas
    let element = event.target;
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  }

}
