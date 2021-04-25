import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Apis } from './config';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http:HttpClient, private api:Apis) {
  }

  getIncidentsWithPage(pageSize:Number, pageNumber:Number, sortBy:string, sortDir:string, search:string):any {
    let url =  this.api.incidentsWithPageUrl;
    url += "PageSize=" + pageSize;
    url += "&PageNumber=" + pageNumber;
    url += "&SortBy=" + (sortBy? sortBy : "test");
    url += "&SortDirection=" + (sortDir? sortDir : "asc");
    url += "&Search=" + search;

    return this.http.get(url).pipe(
      map((m) => {
        return m;
      })
    );
  }

  getIncidentById(id:string){
    let url = this.api.getIncidentByIdUrl + id;
    return this.http.get(url).pipe(
      map((m) => {
        return m;
      }));
  }

  addNewIncident(formData:any){
    let url = this.api.addNewIncidentUrl;
    return this.http.post(url, formData).pipe(
      map((m) => {
        console.log(m);
        return m;
      })
    );
  }

  addNewComment(formData:any){
    let url = this.api.addNewCommentUrl;
    return this.http.post(url, formData ).pipe(
      map((m) => {
        console.log(m);
        return m;
      })
    );
  }

  deleteComment(commentId:string, incidentId:string, userId:string){
    let url =
      this.api.deleteCommentUrl +
      'commentId=' +
      commentId +
      '&incidentId=' +
      incidentId +
      '&userId=' +
      userId;
    return this.http.get(url,{responseType: 'text'}).pipe(
      map((m) => {
        return m;
      }));
  }

  updateIncident(parameters:any){
    let url = this.api.updateIncidentUrl;
    return this.http.post(url, parameters).pipe(
      map((m) => {
        console.log(m);
        return m;
      })
    );
  }

  updateComment(comment:any){
    let url = this.api.updateCommentUrl;
    return this.http.post(url, comment).pipe(
      map((m) => {
        console.log(m);
        return m;
      })
    );
  }

  deleteAttachment(type:string, userid:string, incidentId:string , file:any){
    let url =
      this.api.deleteAttachmentUrl +
                + "type=" + type
                + "&commentId=" + file.CommentId
                + "&incidentId=" + incidentId
                + "&userId=" + userid
                + "&fileId=" + file.Id
                + "&filename=" + file.FileName
                + "&contentType=" + file.ContentType
    return this.http.get(url).pipe(
      map((m) => {
        return m;
      }));
  }


}
