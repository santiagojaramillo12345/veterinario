import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

import { ReactiveFormsModule } from '@angular/forms'; // Importa el módulo ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    AddAppointmentComponent,
    AppointmentListComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




