import { Pipe, PipeTransform } from '@angular/core';
import { clases } from '../models/clases';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filtertring: string) {
    if (value.length === 0 || filtertring === '') {
      return value;
    }
    const clases = [];

    for (const clase of value) {
      if (clase['Nombre_Clase'] === filtertring) {
        clases.push(clase);
      }
      if (clase['Nombre_Instructor'] === filtertring) {
        clases.push(clase);
      }
    }
    return clases;
  }
}
