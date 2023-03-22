import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { instructores } from 'src/app/models/instructores';
import { InstructoresService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-crear-instructor',
  templateUrl: './crear-instructor.component.html',
  styleUrls: ['./crear-instructor.component.css'],
})
export class CrearInstructorComponent implements OnInit {
  instructorForm: FormGroup;
  titulopro = 'Agregar Instructor';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _instructoresService: InstructoresService,
    private aRouter: ActivatedRoute
  ) {
    this.instructorForm = this.fb.group({
      Nombre_Completo: ['', Validators.required],
      Edad: ['', Validators.required],
      Correo: ['', [Validators.required, Validators.email]],
      Telefono: ['', Validators.required],
      Especialidad: ['', Validators.required],
      Foto_Instructor: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarInstructor() {
    const INSTRUCTOR: instructores = {
      Nombre_Completo: this.instructorForm.get('Nombre_Completo')?.value,
      Edad: this.instructorForm.get('Edad')?.value,
      Correo: this.instructorForm.get('Correo')?.value,
      Telefono: this.instructorForm.get('Telefono')?.value,
      Especialidad: this.instructorForm.get('Especialidad')?.value,
      Foto_Instructor: this.instructorForm.get('Foto_Instructor')?.value,
    };

    if (this.id !== null) {
      //Editando Instructor
      this._instructoresService.editarInstructor(this.id, INSTRUCTOR).subscribe(
        (data) => {
          alert('Instructor Actualizado');
          this.router.navigate(['/instructores']);
        },
        (error) => {
          console.log(error);
          alert('Error al Actualizar Instructor');
          this.instructorForm.reset();
        }
      );
    } else {
      //Agregando Instructor
      console.log(INSTRUCTOR);
      this._instructoresService.guardarInstructor(INSTRUCTOR).subscribe(
        (data) => {
          alert('Instructor Agregado');
          this.router.navigate(['/instructores']);
        },
        (error) => {
          console.log(error);
          alert('Error al Agregar Instructor');
          this.instructorForm.reset();
        }
      );
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulopro = 'Editar Instructor';
      this._instructoresService.obtenerInstructor(this.id).subscribe((data) => {
        this.instructorForm.setValue({
          Nombre_Completo: data.Nombre_Completo,
          Edad: data.Edad,
          Correo: data.Correo,
          Telefono: data.Telefono,
          Especialidad: data.Especialidad,
          Foto_Instructor: data.Foto_Instructor,
        });
      });
    }
  }
}
