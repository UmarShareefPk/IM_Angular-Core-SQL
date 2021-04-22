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
}
