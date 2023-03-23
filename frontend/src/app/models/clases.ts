export class clases {
  _id?: number;
  Nombre_Clase: string;
  Descripcion: string;
  Nombre_Instructor: string;
  Fecha: string;
  Hora: string;
  Cupo: number;
  Foto_Clase: string;

  constructor(
    Nombre_Clase: string,
    Descripcion: string,
    Nombre_Instructor: string,
    Fecha: string,
    Hora: string,
    Cupo: number,
    Foto_Clase: string
  ) {
    this.Nombre_Clase = Nombre_Clase;
    this.Descripcion = Descripcion;
    this.Nombre_Instructor = Nombre_Instructor;
    this.Fecha = Fecha;
    this.Hora = Hora;
    this.Cupo = Cupo;
    this.Foto_Clase = Foto_Clase;
  }
}
