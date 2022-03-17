import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentDetailsComponent } from './incidentComponents/incidentDetails/incident-details/incident-details.component';
import { IncidentListingComponent } from './incidentComponents/incident-listing/incident-listing.component';
import { LoginComponent } from './login/login.component';
import { NewIncidentComponent } from './incidentComponents/new-incident/new-incident.component';
import { NewUserComponent } from './userComponents/new-user/new-user.component';
import { UserListingComponent } from './userComponents/user-listing/user-listing.component';
import { DashboardComponent } from './incidentComponents/dashboard/dashboard/dashboard.component';
import {MessagesComponent} from './messagesComponents/messages/messages.component'

// const routes: Routes = [
//   { path: '', redirectTo: '/departments', pathMatch: 'full' },
//   { path: 'departments', component: DepartmentListComponent },
//   {
//     path: 'departments/:id',
//     component: DepartmentDetailComponent,
//     children: [
//       { path: 'overview', component: DepartmentOverviewComponent},
//       { path: 'contact', component: DepartmentContactComponent}
//     ]
//    },
//   { path: 'employees',   component: EmployeeListComponent },
//   { path: '**',   component: PageNotFoundComponent }

// ];

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'incidents', component: IncidentListingComponent },
  { path: 'incidentDetails/:id',   component: IncidentDetailsComponent },
  { path: 'newIncident',   component: NewIncidentComponent },
  { path: 'users',   component: UserListingComponent },
  { path: 'newUser',   component: NewUserComponent },
  { path: 'messages',   component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
