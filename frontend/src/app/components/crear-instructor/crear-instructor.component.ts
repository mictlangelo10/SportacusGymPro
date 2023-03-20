import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { instructores } from 'src/app/models/instructores';

@Component({
  selector: 'app-crear-instructor',
  templateUrl: './crear-instructor.component.html',
  styleUrls: ['./crear-instructor.component.css'],
})
export class CrearInstructorComponent implements OnInit {
  couchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.couchForm = this.fb.group({
      Nombre_Completo: ['', Validators.required],
      Edad: ['', Validators.required],
      Correo: ['', Validators.required],
      Telefono: ['', Validators.required],
      Especialidad: ['', Validators.required],
      Foto_Instructor: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  //Método para agregar a los Instructores
  agregarCoach() {
    const INSTRUCTOR: instructores = {
      Nombre_Completo: this.couchForm.get('Nombre_Completo')?.value,
      Edad: this.couchForm.get('Edad')?.value,
      Correo: this.couchForm.get('Correo')?.value,
      Telefono: this.couchForm.get('Telefono')?.value,
      Especialidad: this.couchForm.get('Expecialidad')?.value,
      Foto_Instructor: this.couchForm.get('Foto_Instructor')?.value,
    };
    console.log(INSTRUCTOR);
  }
}
