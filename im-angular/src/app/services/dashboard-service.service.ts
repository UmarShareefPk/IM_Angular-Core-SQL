import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Apis } from '../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http: HttpClient, private api: Apis, private common:CommonService) { }

  getkpiData() {
    let url = this.api.kpiUrl + this.common.getLoggedInUser();

    return this.http.get(url).pipe(
      map((m) => {
        return m;
      })
    );
  }

  getOverallWidgetData() {
    let url = this.api.overallWidgetUrl;

    return this.http.get(url).pipe(
      map((m) => {
        return m;
      })
    );
  }

  getLast5Data() {
    let url = this.api.last5IncidentsUrl;

    return this.http.get(url).pipe(
      map((m) => {
        return m;
      })
    );
  }

  getMostAssignedToUsersData() {
    let url = this.api.mostAssignedToUsersIncidentsUrl;

    return this.http.get(url).pipe(
      map((m) => {
        return m;
      })
    );
  }

  getOldest5UnresolvedData() {
    let url = this.api.oldest5UnresolvedIncidentsUrl;

    return this.http.get(url).pipe(
      map((m) => {
        return m;
      })
    );
  }


}
