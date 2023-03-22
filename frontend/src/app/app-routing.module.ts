import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InstructoresComponent } from './components/instructores/instructores.component';
import { ClassComponent } from './components/class/class.component';
import { CrearClaseComponent } from './components/crear-clase/crear-clase.component';
import { CrearInstructorComponent } from './components/crear-instructor/crear-instructor.component';
import { ReloadComponent } from './components/reload/reload.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'instructores', component: InstructoresComponent },
  { path: 'class', component: ClassComponent },
  { path: 'addClass', component: CrearClaseComponent },
  { path: 'addCoach', component: CrearInstructorComponent },
  { path: 'editClass/:id', component: CrearClaseComponent },
  { path: 'editCoach/:id', component: CrearInstructorComponent },
  { path: '""', redirectTo: '', pathMatch: 'full' },
  { path: 'reload', component: ReloadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
