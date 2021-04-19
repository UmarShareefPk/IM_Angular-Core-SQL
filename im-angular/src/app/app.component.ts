import { DOCUMENT , Location } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) document: any,
    private r: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {

  }

  ngOnInit(): void {

  }

  title = 'im-angular';
}
