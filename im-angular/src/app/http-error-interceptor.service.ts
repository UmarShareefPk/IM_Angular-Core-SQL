import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor {

  constructor(private bs:AuthService) { }

  intercept(req:any,next:any){

    return next.handle(req)
    .pipe(
      catchError(err => {
        console.log("error" , err.error.message);
          if (err.status === 401) {
             // this.bs.logOut()// auto logout if 401 response returned from api
              ;
              //location.reload(true);
          }
          const error = err.error.message || err.statusText;
          return throwError(error);
      })//end of catchError operator
    );//end of pipe
  }//end of intercept
}
