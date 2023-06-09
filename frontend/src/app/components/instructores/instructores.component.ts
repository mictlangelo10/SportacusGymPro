import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { instructores } from 'src/app/models/instructores';
import { ClasesService } from 'src/app/services/clases.service';
import { InstructoresService } from 'src/app/services/instructores.service';

@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.component.html',
  styleUrls: ['./instructores.component.css'],
})
export class InstructoresComponent implements OnInit {
  listInstructores: instructores[] = [];

  constructor(
    private _instructoresService: InstructoresService,
    private fb: FormBuilder,
    private _claseService: ClasesService
  ) {}
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
        alert('Instructor Eliminado');
        this.obtenerInstructores();
      },
      (error) => {
        console.log(error);
        alert('Error');
      }
    );
  }
}
