import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Apis } from './config';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http:HttpClient, private api:Apis) {
  }

  getIncidentsWithPage(pageSize:Number, pageNumber:Number, sortBy:string, sortDir:string, search:string):any {
    let url =  this.api.incidentsWithPageUrl;
    url = url + "PageSize=" + pageSize;
    url = url + "&PageNumber=" + pageNumber;
    url = url + "&SortBy=" + (sortBy? sortBy : "test");
    url = url + "&SortDirection=" + (sortDir? sortDir : "asc");
    url = url + "&Search=" + search;

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


}
