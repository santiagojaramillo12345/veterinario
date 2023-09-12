import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments: any[] = []; // Almacenar las citas en un arreglo

  constructor() {}

  getAppointmentList() {
    return this.appointments;
  }

  addAppointment(appointment: any) {
    // Validar si la cita ya existe en la misma fecha y hora
    const isDuplicate = this.appointments.some((existingAppointment) => {
      return (
        existingAppointment.date === appointment.date &&
        existingAppointment.time === appointment.time
      );
    });

    if (isDuplicate) {
      throw new Error('Ya existe una cita en esta fecha y hora.');
    }

    // Si no es un duplicado, agregar la cita
    this.appointments.push(appointment);
  }

  updateAppointment(appointment: any) {
    // Implementar lógica para actualizar una cita
    // Puedes buscar la cita por su ID y luego actualizarla
  }

  // Implementar más lógica según tus necesidades
}

