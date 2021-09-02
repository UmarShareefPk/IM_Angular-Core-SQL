import { DOCUMENT  } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

isloggedIn:boolean = false;
  constructor(
    @Inject(DOCUMENT) document: any,
    private r: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {

  }

  ngOnInit(): void {

    this.auth.userLoggedInObs.subscribe((m) => {
      this.isloggedIn = m;
      if(!m)  this.router.navigate(['/login']);
    });// know as soon as login state is changed

  }
}
