import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { IncidentListingComponent } from './incident-listing/incident-listing.component';
import { LoginComponent } from './login/login.component';
import { NewIncidentComponent } from './new-incident/new-incident.component';

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
  { path: '', redirectTo: '/incidents', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'incidents', component: IncidentListingComponent },
  { path: 'incidentDetails/:id',   component: IncidentDetailsComponent },
  { path: 'newIncident',   component: NewIncidentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
