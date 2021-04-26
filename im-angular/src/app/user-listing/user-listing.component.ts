import { ChangeDetectorRef, Component, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { map, takeUntil } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {


request: any; // to cancel previous requests
status:string = "loading"; //loading, error, noData

pageSize:number = 5;
pageNumber:number = 1;
totalRecords:number = 0;
users:any[] = [];
search:string = "";

  constructor(
    private router: Router,
    private userService:UserService,
    public commonService:CommonService
  ) {}


  ngOnInit(): void {
    this.loadIncidents();
  }
  newUser(){
    this.router.navigate(['/newUser']);
  }

  loadIncidents(){
    if(this.request)
       this.request.unsubscribe();
    this.users = [];
   this.status = "loading";

    this.request =  this.userService.getUsersWithPage(this.pageSize, this.pageNumber, '', '', this.search)
    .pipe(map(m => {this.status = ""; return m}))
    .subscribe(
      (m: any) => {
        this.users = m.Users;
        this.totalRecords = m.Total_Users;
        if(this.totalRecords === 0)
          this.status = "noData";
        else
          this.status = "";
      },
      (error: any) => {
        this.status="error";
      }
    );
  }

  pageNumberChanged(pageNumber:any){
    this.pageNumber  = pageNumber;
    this.loadIncidents();
  }

  pageSizeChanged(pageSize:any){
    this.pageSize  = pageSize;
    this.pageNumber = 1;
    this.loadIncidents();
  }

  searchChanged(event:any){
    let text = event.target.value;
    this.pageNumber = 1;
    this.search = text;
    this.loadIncidents();
  }

}
