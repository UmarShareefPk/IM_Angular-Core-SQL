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
}
