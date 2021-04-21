import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLoggedInSource = new BehaviorSubject(false);
  userLoggedInObs = this.userLoggedInSource.asObservable();

  private baseURl: string = 'https://localhost:44310/';

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.userLoggedInSource.next(true);
    } else {
      this.userLoggedInSource.next(false);
    }
  }

  validateUser(username: string, password: string): Observable<boolean> {
    let url = this.baseURl + 'api/Users/authenticate';
    return this.http
      .post<any>(url, { Username: username, Password: password })
      .pipe(
        map((m) => {
          console.log('m', m);
          if (m  && m.Token) {
            localStorage.setItem('token', m.Token);
            localStorage.setItem('user', JSON.stringify(m));
            this.login();
            this.userLoggedInSource.next(true);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  IsAuthenticated(): boolean {
    if (localStorage.getItem('token')) return true;
    else return false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userLoggedInSource.next(false);
  }
  login() {
    this.userLoggedInSource.next(true);
  }
}


