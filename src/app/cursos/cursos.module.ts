import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutenticacionModule } from '../autenticacion/autenticacion.module';
import { MaterialModule } from '../material.module';
import { CursoService } from '../services/curso.service';



@NgModule({
  declarations: [
    ListaCursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AutenticacionModule,
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
