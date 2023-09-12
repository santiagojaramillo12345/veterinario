import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
})
export class AddAppointmentComponent {
  appointmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    this.appointmentForm = this.formBuilder.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      patientName: ['', Validators.required],
      comments: [''],
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      try {
        // Agregar la cita al servicio de citas
        this.appointmentService.addAppointment(this.appointmentForm.value);
        // Limpiar el formulario después de agregar la cita
        this.appointmentForm.reset();
      } catch (error) {
        // Mostrar un mensaje de error si la cita es duplicada
        alert(error);
      }
    }
  }
}
