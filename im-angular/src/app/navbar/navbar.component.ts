import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {  JsonHubProtocol,
  HubConnectionBuilder,
  LogLevel
} from '@microsoft/signalr';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { CommonService } from '../services/common.service';
import { Apis } from '../config';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  notifications:any= [];
  unReadCount:number = 0;

  constructor(
    private auth: AuthService,
    private router: Router,
    private r: Renderer2,
    private notificationService: NotificationService,
    private userService:UserService,
    public common:CommonService,
    private api: Apis,
    @Inject(DOCUMENT) document: any,
  ) {}

  ngOnInit(): void {
    this.getNotifications();
    this.notificationService.ReceiveSignalRUpdates();
    this.notificationService.notificationseSourceObserable.subscribe( m => {
      console.log("getting notifications now");
      this.getNotifications();
    })
   // this.ReceiveSignalRUpdates();

  }

  logoutClick() {
    this.router.navigate(['/login']);
    this.auth.logout();
  }

  manuChanged(target: string, event: any) {
    this.r.removeClass(document.body, 'site-bg-img');
    event.preventDefault();
    if (target == 'incidents') this.router.navigate(['/incidents']);
    else if (target == 'users') this.router.navigate(['/users']);
    else if (target == 'dashboard') this.router.navigate(['/dashboard']);
    else if (target == 'messages') this.router.navigate(['/messages']);
  }

  setUnreadCount(){
      this.unReadCount = this.notifications.filter(
        (n: any) => n.IsRead == false
      ).length;
  }

  getNotifications(){
    this.notificationService.getAllNotifications().subscribe(
      (m) => {
        this.notifications = m;
        this.setUnreadCount();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openIncident(incidentId:string, notificationId:string){

    this.setNotificationStatus(null,notificationId, true);

    if(window.location.href.toString().includes(incidentId)){
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
    }

    this.router.navigate(['/incidentDetails', incidentId]);
  }

  setNotificationStatus(event:any, id:string, isRead:boolean){
    if(event)
      event.stopPropagation();

    this.notificationService.setNotificationStatus(id, isRead).subscribe(
      (m) => {
          let notifications = this.notifications.map((notification:any) => {
            if (notification.Id === id) {
              notification.IsRead = isRead;
            }
            return notification;
          });
        this.notifications = notifications;
        this.setUnreadCount();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // ReceiveSignalRUpdates() {
  //   const newConnection = new HubConnectionBuilder()
  //     .withUrl( this.api.baseUrl +  'hubs/notifications')
  //     .withAutomaticReconnect()
  //     .withHubProtocol(new JsonHubProtocol())
  //     .configureLogging(LogLevel.Information)
  //     .build();
  //   console.log('newConnection', newConnection);
  //   newConnection
  //     .start()
  //     .then((result) => {
  //       console.log('Connected!');
  //       let hubId:any = newConnection.connectionId;
  //       this.userService.updateHubId(hubId, this.common.getLoggedInUser()).subscribe(
  //         (m) => {
  //           console.log(m)
  //         },
  //         (err) => {}
  //       );

  //       newConnection.on('ReceiveMessage', (message) => {
  //         console.log(message);
  //        // commentRecieved(message);
  //       });
  //       newConnection.on('UpdateNotifications', (incidentId) => {
  //         console.log(incidentId);
  //        this.notificationService.getAllNotifications().subscribe(
  //           (m) => {
  //             this.notifications =  m;
  //             this.setUnreadCount();
  //           },
  //           (err) => {}
  //         );

  //       });
  //     })
  //     .catch((e) => console.log('Connection failed: ', e));
  // }
}
