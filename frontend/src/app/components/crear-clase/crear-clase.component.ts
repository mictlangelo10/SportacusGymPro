import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { clases } from 'src/app/models/clases';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css'],
})
export class CrearClaseComponent implements OnInit {
  classForm: FormGroup;
  titulo = 'Crear Clase';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _clasesService: ClasesService,
    private aRouter: ActivatedRoute
  ) {
    this.classForm = this.fb.group({
      Nombre_Clase: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Nombre_Instructor: ['', Validators.required],
      Fecha: ['', Validators.required],
      Hora: ['', Validators.required],
      Cupo: ['', Validators.required],
      Foto_Clase: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarClase() {
    const CLASE: clases = {
      Nombre_Clase: this.classForm.get('Nombre_Clase')?.value,
      Descripcion: this.classForm.get('Descripcion')?.value,
      Nombre_Instructor: this.classForm.get('Nombre_Instructor')?.value,
      Fecha: this.classForm.get('Fecha')?.value,
      Hora: this.classForm.get('Hora')?.value,
      Cupo: this.classForm.get('Cupo')?.value,
      Foto_Clase: this.classForm.get('Foto_Clase')?.value,
    };

    if (this.id !== null) {
      //Editando Clase
      this._clasesService.editarClase(this.id, CLASE).subscribe(
        (data) => {
          alert('Clase Actualizada alv');
          this.router.navigate(['/class']);
        },
        (error) => {
          console.log(error);
          alert('No se pudo bb');
          this.classForm.reset();
        }
      );
    } else {
      //Agregando Clase
      console.log(CLASE);
      this._clasesService.guardarClase(CLASE).subscribe(
        (data) => {
          alert('Se pudo mi amor');
          this.router.navigate(['/class']);
        },
        (error) => {
          console.log(error);
          alert('No se pudo bb');
          this.classForm.reset();
        }
      );
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Clase';
      this._clasesService.obtenerClase(this.id).subscribe((data) => {
        this.classForm.setValue({
          Nombre_Clase: data.Nombre_Clase,
          Descripcion: data.Descripcion,
          Nombre_Instructor: data.Nombre_Instructor,
          Fecha: data.Fecha,
          Hora: data.Hora,
          Cupo: data.Cupo,
          Foto_Clase: data.Foto_Clase,
        });
      });
    }
  }
}
