import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
})
export class AppointmentListComponent {
  appointments: any[];

  constructor(private appointmentService: AppointmentService) {
    // Obtener la lista de citas desde el servicio
    this.appointments = this.appointmentService.getAppointmentList();
  }
}
