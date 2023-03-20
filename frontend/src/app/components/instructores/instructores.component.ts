import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { instructores } from 'src/app/models/instructores';
import { InstructoresService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.component.html',
  styleUrls: ['./instructores.component.css'],
})
export class InstructoresComponent implements OnInit {
  listInstructores: instructores[] = [];
  instructorForm: FormGroup;

  constructor(
    private _instructoresService: InstructoresService,
    private fb: FormBuilder
  ) {
    this.instructorForm = this.fb.group({
      Nombre_Completo: ['', Validators.required],
      Edad: ['', Validators.required],
      Correo: ['', Validators.required],
      Telefono: ['', Validators.required],
      Especialidad: ['', Validators.required],
      Foto_Instructor: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.obtenerInstructores();
  }
  obtenerInstructores() {
    this._instructoresService.getInstructores().subscribe(
      (data) => {
        console.log(data);
        this.listInstructores = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarInstructor(id: any) {
    this._instructoresService.eliminarInstructor(id).subscribe(
      (data) => {
        alert('Se pudo pa');
        this.obtenerInstructores();
      },
      (error) => {
        console.log(error);
        alert('Error');
      }
    );
  }
}
