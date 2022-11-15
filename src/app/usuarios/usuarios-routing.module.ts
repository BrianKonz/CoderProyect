import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { AlumnoInicioComponent } from './components/alumno-inicio/alumno-inicio.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {path: '', component: AlumnoInicioComponent, children: [
    {path: 'listarUsuario', component:ListaUsuariosComponent},
    {path: 'editarUsuario', component:EditarAlumnoComponent, canActivate: [AdminGuard]},
    {path: 'agregarUsuario', component:AgregarAlumnoComponent, canActivate: [AdminGuard]},

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
