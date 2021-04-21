import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    // know as soon as login state is changed
    // this.auth.userLoggedInObs.subscribe((m) => {
    //  if(!m) //is not login
    //   this.router.navigate(["/login"]);

    // });
  }

  logoutClick(){
    this.router.navigate(["/login"]);
    this.auth.logout();
  }

}
