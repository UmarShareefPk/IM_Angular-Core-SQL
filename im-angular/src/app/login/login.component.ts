import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error: string = '';
  isloggedIn:boolean = false;
  constructor(
    private router: Router,
    @Inject(DOCUMENT) document: any,
    private r: Renderer2,
    private auth: AuthService,
    private userService:UserService
  ) {}

  ngOnInit(): void {
  //  this.r.addClass(document.body, 'site-bg-img');


  this.auth.userLoggedInObs.subscribe((m) => {
    this.isloggedIn = m;
    if(m)  this.router.navigate(['/dashboard']);
  });// know as soon as login state is changed


  }

  loginClick(event: any) {
    event.preventDefault();
    console.log("calling validate user");
    this.auth.validateUser(this.username, this.password).subscribe(
      (m) => {
        if (m) {
          this.r.removeClass(document.body, 'site-bg-img');
          this.router.navigate(['/dashboard']);
          this.userService.getAllUsers().subscribe(m=> localStorage.setItem("allUsers", JSON.stringify(m)));
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
