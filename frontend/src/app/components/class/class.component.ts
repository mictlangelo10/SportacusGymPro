import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { query } from 'express';
import { debounceTime } from 'rxjs';
import { clases } from 'src/app/models/clases';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  @ViewChild('close', { static: true }) boton: any;
  listClases: clases[] = [];
  filteredClase: string = '';
  filteredFecha: string = '';
  filteredHora: string = '';
  selectId: any;
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled = false;
  public results: string[] = [];

  //Este no supe si quitarlo o no asi que mejor lo deje tal cual pero en el crear clase esta de igual manera tu decides :)
  constructor(private _clasesService: ClasesService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerClases();
  }

  setId(id: any) {
    this.results = [];
    this.selectId = id;
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    this.selectCamera(this.cameras[0].label);
  }

  scanSuccessHandler(event: string) {
    console.log(event);
    this.results.unshift(event);
    if (event != 'Fallo al pagar su mensualidad!!') {
      this._clasesService.updateQr(this.selectId).subscribe((data: any) => {
        console.log(data);

        if (data.msg != 'El cupo esta lleno') {
          this.boton.nativeElement.click();
          this.router.navigate(['reload']);
        } else {
          this.results = [];
          this.results.unshift('El cupo esta lleno');
        }
      });
    }
  }

  selectCamera(cameraLabel: string) {
    this.cameras.forEach((camera) => {
      if (camera.label.includes(cameraLabel)) {
        this.myDevice = camera;
        console.log(camera.label);
        this.scannerEnabled = true;
      }
    });
  }

  limpiarFiltros() {
    this.filteredClase = '';
    this.filteredHora = ''; // valor por defecto
    this.filteredFecha = ''; // valor por defecto
  }

  obtenerClases() {
    this._clasesService.getClases().subscribe(
      (data) => {
        console.log(data);
        this.listClases = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarClase(id: any) {
    this._clasesService.eliminarClase(id).subscribe(
      (data) => {
        alert('Clase Eliminada');
        this.obtenerClases();
      },
      (error) => {
        console.log(error);
        alert('Error');
      }
    );
  }
}
