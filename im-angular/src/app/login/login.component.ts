import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) document: any,
    private r: Renderer2,
    private auth:AuthService
  ) {}

  ngOnInit(): void {
    this.r.addClass(document.body, 'site-bg-img');
  }

  loginClick(event: any) {
    event.preventDefault();
    this.r.removeClass(document.body, 'site-bg-img');

    this.auth.validateUser("umar", "password").subscribe(m=>{
      console.log("m in login" , m);
    });

    this.auth.login();

    //this.router.navigate(['/incidents']);
  }
}
