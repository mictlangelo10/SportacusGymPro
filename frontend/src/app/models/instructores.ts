export class instructores {
  _id?: number;
  Nombre_Completo: string;
  Edad: number;
  Correo: string;
  Telefono: number;
  Especialidad: string;
  Foto_Instructor: string;

  constructor(
    Nombre_Completo: string,
    Edad: number,
    Correo: string,
    Telefono: number,
    Especialidad: string,
    Foto_Instructor: string
  ) {
    this.Nombre_Completo = Nombre_Completo;
    this.Edad = Edad;
    this.Correo = Correo;
    this.Telefono = Telefono;
    this.Especialidad = Especialidad;
    this.Foto_Instructor = Foto_Instructor;
  }
}
