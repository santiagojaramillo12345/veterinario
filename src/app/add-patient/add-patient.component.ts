import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
})
export class AddPatientComponent {
  patientForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      breed: [''],
      age: [''],
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      // Aquí puedes enviar los datos del formulario al servicio de pacientes
      console.log(this.patientForm.value);
      // También puedes reiniciar el formulario después de enviarlo
      this.patientForm.reset();
    }
  }
}

