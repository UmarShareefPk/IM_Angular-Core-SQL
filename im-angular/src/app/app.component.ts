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
    r: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
      r.addClass(document.body, 'site-bg-img');
      console.log(location.path());
      // console.log(window.location.pathname);
      // this.route.url.subscribe(() => {
      //   console.log(this.route.snapshot.firstChild?.data);
      // });
  }

  title = 'im-angular';
}
