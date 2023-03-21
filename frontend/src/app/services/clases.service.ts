import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clases } from '../models/clases';
import { InstructoresService } from './instructores.service';
@Injectable({
  providedIn: 'root',
})
export class ClasesService {
  url = 'http://localhost:4000/api/clases/';
  constructor(private http: HttpClient) {}
  urlin = 'http://localhost:4000/api/instructores/';

  getClases(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarClase(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarClase(clases: clases): Observable<any> {
    return this.http.post(this.url, clases);
  }

  obtenerClase(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarClase(id: string, clase: clases): Observable<any> {
    return this.http.put(this.url + id, clase);
  }

  consultarInstructor(Nombre_Instructor: string): Observable<any> {
    return this.http.get(this.urlin + Nombre_Instructor);
  }
}
