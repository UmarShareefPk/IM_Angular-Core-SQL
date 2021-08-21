import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Apis } from '../config';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  constructor(private http: HttpClient, private api: Apis, private notificationService:NotificationService) {}

  getIncidentsWithPage(
    pageSize: Number,
    pageNumber: Number,
    sortBy: string,
    sortDir: string,
    search: string
  ): any {
    let url = this.api.incidentsWithPageUrl;
        url += 'PageSize=' + pageSize;
        url += '&PageNumber=' + pageNumber;
        url += '&SortBy=' + (sortBy ? sortBy : 'test');
        url += '&SortDirection=' + (sortDir ? sortDir : 'asc');
        url += '&Search=' + search;

    return this.http.get(url).pipe(
      map((m) => {
        return m;
      })
    );
  }

  getIncidentById(id: string) {
    let url = this.api.getIncidentByIdUrl + id;
    return this.http.get(url).pipe(
      map((m) => {
        return m;
      })
    );
  }

  addNewIncident(formData: any) {
    let url = this.api.addNewIncidentUrl;
    return this.http.post(url, formData, { responseType: 'text' }).pipe(
      map((m) => {
        console.log(m);
        return m;
      })
    );
  }

  addNewComment(formData: any) {
    let url = this.api.addNewCommentUrl;
    return this.http.post(url, formData).pipe(
      map((m) => {
        let comment:any = m;
        this.notificationService.incidentUpdatedSignalR(comment.IncidentId)
        return m;
      })
    );
  }

  deleteComment(commentId: string, incidentId: string, userId: string) {
    let url =
      this.api.deleteCommentUrl +
      'commentId=' +
      commentId +
      '&incidentId=' +
      incidentId +
      '&userId=' +
      userId;
    return this.http.get(url, { responseType: 'text' }).pipe(
      map((m) => {
        this.notificationService.incidentUpdatedSignalR(incidentId)
        return m;
      })
    );
  }

  updateIncident(parameters: any) {
    let url = this.api.updateIncidentUrl;
    return this.http.post(url, parameters).pipe(
      map((m) => {
        this.notificationService.incidentUpdatedSignalR(parameters.IncidentId);
        return m;
      })
    );
  }

  updateComment(comment: any) {
    let url = this.api.updateCommentUrl;
    return this.http.post(url, comment).pipe(
      map((m) => {
        console.log(comment);
        this.notificationService.incidentUpdatedSignalR(comment.IncidentId);
        return m;
      })
    );
  }

  deleteAttachment( type: string,  commentId: string, incidentId: string, userId: string, file: any ) {
    let url =
      this.api.deleteAttachmentUrl +
      'type=' +   type +
      '&commentId=' + commentId +
      '&incidentId=' + incidentId +
      '&userId=' + userId +
      '&fileId=' + file.Id +
      '&filename=' + file.FileName +
      '&contentType=' + file.ContentType;
    return this.http.get(url, { responseType: 'text' }).pipe(
      map((m) => {
        this.notificationService.incidentUpdatedSignalR(incidentId);
        return m;
      })
    );
  }

  downloadFile( type: string, commentId:string, incidentId: string, file: any){

    let url =
    this.api.downloadFileUrl +
    'type=' +   type +
    '&commentId=' + commentId +
    '&incidentId=' + incidentId +
    '&filename=' + file.FileName +
    '&contentType=' + file.ContentType;
    console.log(url)
    window.open(url);
  }


}
