import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req:any, next:any){
    return next.handle(req);
    console.log('intercept' + req.url);
    if((<string>req.url).indexOf('login') > 0){
      return next.handle(req);
    }

    let token = localStorage.getItem('token');
    console.log(token);
    if(token){
      const clonedReq = req.clone({
        setHeaders: {'Authorization': `Bearer ${token}`}
      });

      return next.handle(clonedReq);
    }
    else {
      return next.handle(req);
    }
  }
}
