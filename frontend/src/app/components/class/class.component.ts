import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  listClases: clases[] = [];
  filteredClase: string = '';
  filteredFecha: string = '';
  filteredHora: string = '';
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled = false;
  public results: string[] = [];

  //Este no supe si quitarlo o no asi que mejor lo deje tal cual pero en el crear clase esta de igual manera tu decides :)
  constructor(private _clasesService: ClasesService) {}

  ngOnInit(): void {
    this.obtenerClases();
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    this.selectCamera(this.cameras[0].label);
  }

  scanSuccessHandler(event: string) {
    console.log(event);
    this.results.unshift(event);
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
