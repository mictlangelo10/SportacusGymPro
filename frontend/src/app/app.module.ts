import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './components/class/class.component';
import { InstructoresComponent } from './components/instructores/instructores.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbaradminComponent } from './components/navbaradmin/navbaradmin.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';
import { CrearInstructorComponent } from './components/crear-instructor/crear-instructor.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { FechaPipe } from './Pipes/fecha.pipe';
import { HoraPipe } from './Pipes/hora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    InstructoresComponent,
    DashboardComponent,
    NavbaradminComponent,
    FooterComponent,
    CrearClaseComponent,
    CrearInstructorComponent,
    FilterPipe,
    FechaPipe,
    HoraPipe,
  ],
  imports: [
    BrowserModule,
    ZXingScannerModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
