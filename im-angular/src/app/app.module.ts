import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { IncidentListingComponent } from './incidentComponents/incident-listing/incident-listing.component';
import { IncidentDetailsComponent } from './incidentComponents/incidentDetails/incident-details/incident-details.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { IncidentService } from './services/incident.service';
import { MessagesService } from './services/messages.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/interceptors/http-interceptor.service';
import { HttpErrorInterceptorService } from './services/interceptors/http-error-interceptor.service';
import { PaginationComponent } from './pagination/pagination.component';
import { Apis } from './config';
import { CommonService } from './services/common.service';
import { CommentComponent } from './incidentComponents/incidentDetails/comment/comment.component';
import { AssigneeDropdownComponent } from './assignee-dropdown/assignee-dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AddCommentComponent } from './incidentComponents/incidentDetails/add-comment/add-comment.component';
import { NewIncidentComponent } from './incidentComponents/new-incident/new-incident.component';
import { UserListingComponent } from './userComponents/user-listing/user-listing.component';
import { NewUserComponent } from './userComponents/new-user/new-user.component';
import { DashboardComponent } from './incidentComponents/dashboard/dashboard/dashboard.component';
import { KpibarComponent } from './incidentComponents/dashboard/kpibar/kpibar.component';
import { Last5Component } from './incidentComponents/dashboard/last5/last5.component';

import { OldestOpenComponent } from './incidentComponents/dashboard/oldest-open/oldest-open.component';
import { OverallWidgetComponent } from './incidentComponents/dashboard/overall-widget/overall-widget.component';
import { KpiComponent } from './incidentComponents/dashboard/kpi/kpi.component';
import { ChartModule } from 'angular-highcharts';
import { MostAssignedToUsersComponent } from './incidentComponents/dashboard/most-assigned-to-users/most-assigned-to-users.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { MessagesComponent } from './messagesComponents/messages/messages.component';
import { ComposeMessageComponent } from './messagesComponents/compose-message/compose-message.component';
import { ReplyComponent } from './messagesComponents/reply/reply.component';
import { MessageComponent } from './messagesComponents/message/message.component';
import { ConversationsComponent } from './messagesComponents/conversations/conversations.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    IncidentListingComponent,
    IncidentDetailsComponent,
    PaginationComponent,
    CommentComponent,
    AssigneeDropdownComponent,
    AddCommentComponent,
    NewIncidentComponent,
    UserListingComponent,
    NewUserComponent,
    DashboardComponent,
    KpibarComponent,
    Last5Component,
    OldestOpenComponent,
    OverallWidgetComponent,
    KpiComponent,
    MostAssignedToUsersComponent,
    UnauthorizedComponent,
    MessagesComponent,
    ComposeMessageComponent,
    ReplyComponent,
    MessageComponent,
    ConversationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    ChartModule,

  ],
  providers: [
    AuthService,
    UserService,
    IncidentService,
    Apis,
    CommonService,
    MessagesService,
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
