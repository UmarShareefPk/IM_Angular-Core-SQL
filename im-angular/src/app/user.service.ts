import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Apis } from './config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private api:Apis) { }

  getAllUsers(){
    return this.http.get(this.api.allUsersUrl).pipe(
      map( m=> {
        console.log(m)
        return m;
      })
    )
  }

  getUsersWithPage(
    pageSize: Number,
    pageNumber: Number,
    sortBy: string,
    sortDir: string,
    search: string
  ): any {
    let url = this.api.userssWithPageUrl;
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


  addNewUser(formData: any) {
    let url = this.api.addNewUserUrl;
    return this.http.post(url, formData, { responseType: 'text' }).pipe(
      map((m) => {
        console.log(m);
        return m;
      })
    );
  }


}
