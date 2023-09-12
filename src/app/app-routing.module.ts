import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AppComponent } from './app.component';



const routes: Routes = [

  { path: 'add-appointment', component: AddAppointmentComponent },
  { path: 'appointment-list', component: AppointmentListComponent }
  ,{path: 'add-patient', component: AddPatientComponent },
  {path: 'app.component',component:AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
