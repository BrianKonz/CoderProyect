import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { AlumnoInicioComponent } from './components/alumno-inicio/alumno-inicio.component';
import { UsuarioService } from './services/usuario-services.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    EditarAlumnoComponent,
    AgregarAlumnoComponent,
    AlumnoInicioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    FormsModule,
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuariosModule { }
