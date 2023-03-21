import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { instructores } from '../models/instructores';

@Injectable({
  providedIn: 'root',
})
export class InstructoresService {
  url = 'http://localhost:4000/api/instructores/';
  constructor(private http: HttpClient) {}

  getInstructores(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarInstructor(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarInstructor(instructores: instructores): Observable<any> {
    return this.http.post(this.url, instructores);
  }

  obtenerInstructor(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarInstructor(id: string, clase: instructores): Observable<any> {
    return this.http.put(this.url + id, clase);
  }
}
