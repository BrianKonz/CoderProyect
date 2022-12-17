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
import { StoreModule } from '@ngrx/store';
import { cursosFeatureKey, reducer } from './state/cursos.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';



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
    StoreModule.forFeature(cursosFeatureKey, reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
