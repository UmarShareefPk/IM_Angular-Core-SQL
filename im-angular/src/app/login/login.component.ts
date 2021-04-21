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
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) document: any,
    private r: Renderer2,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.r.addClass(document.body, 'site-bg-img');
  }

  loginClick(event: any) {
    event.preventDefault();

    this.auth.validateUser(this.username, this.password).subscribe(
      (m) => {
        if (m) {
          this.r.removeClass(document.body, 'site-bg-img');
          this.router.navigate(['/incidents']);
        } else {
          this.error = 'Incorrect username or password.';
        }
      },
      (error) => {
        console.log(error);
        this.error = 'Incorrect username or password.';
      }
    );
  }
}
