import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';
import { Apis } from '../config';
import {  JsonHubProtocol,
  HubConnectionBuilder,
  LogLevel
} from '@microsoft/signalr';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationsSource = new BehaviorSubject(false);
  notificationseSourceObserable = this.notificationsSource.asObservable();


  constructor(private http:HttpClient, private api:Apis, private common:CommonService, private userService:UserService) { }

  getAllNotifications(){
    let url = this.api.allNotificationsUrl + "?userId=" + this.common.getLoggedInUser();
    return this.http.get(url).pipe(
      map( m=> {
        return m;
      })
    );
  }

  setNotificationStatus(id:string, isRead:boolean){
    let url = this.api.setNotificationStatusUrl  + "?notificationId=" + id + "&isRead="+ isRead;
    return this.http.get(url).pipe(
      map( m=> {
        return m;
      })
    );
  }

  incidentUpdatedSignalR (incidentId:string) {
    const connection:any = new HubConnectionBuilder()
    .withUrl(this.api.baseUrl + 'hubs/notifications')
    .withAutomaticReconnect()
    .withHubProtocol(new JsonHubProtocol())
    .configureLogging(LogLevel.Information)
    .build();

    connection.start().then(()=>{
        console.log(connection.connectionStarted);
        if (connection.connectionStarted) {
            try {
                connection.send("SendIncidentUpdate", incidentId, this.common.getLoggedInUser());
            } catch (e) {
              console.log(e);
            }
          } else {
            alert("No connection to server yet.");
          }
    })

  }

    ReceiveSignalRUpdates() {
    const newConnection = new HubConnectionBuilder()
      .withUrl( this.api.baseUrl +  'hubs/notifications')
      .withAutomaticReconnect()
      .withHubProtocol(new JsonHubProtocol())
      .configureLogging(LogLevel.Information)
      .build();
    console.log('newConnection', newConnection);
    newConnection
      .start()
      .then((result) => {
        console.log('Connected!');
        let hubId:any = newConnection.connectionId;
        this.userService.updateHubId(hubId, this.common.getLoggedInUser()).subscribe(
          (m) => {
            console.log(m)
          },
          (err) => {}
        );

        newConnection.on('ReceiveMessage', (message) => {
          console.log(message);
         // commentRecieved(message);
        });
        newConnection.on('UpdateNotifications', (incidentId) => {
          console.log(incidentId);
          this.notificationsSource.next(true);
        });
      })
      .catch((e) => console.log('Connection failed: ', e));
  }


}
