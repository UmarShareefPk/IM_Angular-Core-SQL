import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { Apis } from '../config';
import { NotificationService } from './notification.service';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient, private api: Apis, private notificationService:NotificationService) {}



  getconversationsByUser(userid: string) {
    let url = this.api.conversationsByUserUrl + userid;
    return this.http.get(url).pipe(
      map((m) => {
        return m;
      }) 
    );
  }

  getmessagesByConversation(conversationId: string) {
    let url = this.api.messagesByConversationsUrl + conversationId;
    return this.http.get(url).pipe(
      map((m) => {
        return m;
      }) 
    );
  }

  sendMessage(formData: any) {
    let url = this.api.sendMessageUrl;
    return this.http.post(url, formData, { responseType: 'text' }).pipe(
      map((m) => {
        console.log(m);
        return m;
      })
    );
  }


  deleteConversation(conversationId: string) {
    let url = this.api.deleteConversationUrl + conversationId;
    return this.http.post(url, null).pipe(
      map((m) => {
       // this.notificationService.incidentUpdatedSignalR(parameters.IncidentId);
        return m;
      })
    );
  }

  deleteMessage(messageId: string) {
    let url = this.api.deleteMessageUrl + messageId;
    return this.http.post(url, null).pipe(
      map((m) => {
       // this.notificationService.incidentUpdatedSignalR(parameters.IncidentId);
        return m;
      })
    );
  }

  


}
