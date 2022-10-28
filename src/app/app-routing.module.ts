import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { Error404Component } from './components/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'cursos', children: [
    {path: 'listar', component:ListaCursosComponent},
    {path: 'editar', component:EditarCursoComponent},
    {path: 'agregar', component:AgregarCursoComponent}
  ]},
  {path: 'contacto', component:ContactoComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
