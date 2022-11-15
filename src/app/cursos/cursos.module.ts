import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { CursoService } from './services/curso.service';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';
import { SharedModule } from '../shared/shared.module';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { BooleanToTextPipe } from '../pipes/boolean-to-text.pipe';
import { BooleanStyleDirective } from '../directives/boolean-style.directive';



@NgModule({
  declarations: [
    ListaCursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    CursosInicioComponent,
    DetalleCursoComponent,
    BooleanToTextPipe,
    BooleanStyleDirective,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    FormsModule,
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
