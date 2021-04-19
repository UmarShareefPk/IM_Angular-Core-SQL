import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, @Inject(DOCUMENT) document: any,
  private r: Renderer2) {
    r.addClass(document.body, 'site-bg-img');
   }

  ngOnInit(): void {
  }

  loginClick(event:any){
    event.preventDefault();
    //alert("working");
    this.r.removeClass(document.body, 'site-bg-img');
    this.router.navigate(['/incidents']);

  }

}
