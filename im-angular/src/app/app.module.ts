import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { IncidentListingComponent } from './incident-listing/incident-listing.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { IncidentService } from './incident.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './http-interceptor.service';
import { HttpErrorInterceptorService } from './http-error-interceptor.service';
import { PaginationComponent } from './pagination/pagination.component';
import { Apis } from './config';
import { CommonService } from './common.service';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    IncidentListingComponent,
    IncidentDetailsComponent,
    PaginationComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    IncidentService,
    Apis,
    CommonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi : true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
