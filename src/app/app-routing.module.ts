import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { Error404Component } from './components/error404/error404.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
