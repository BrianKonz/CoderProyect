import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './core/components/contacto/contacto.component';
import { InicioComponent } from './core/components/inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},  
  {path: 'inicio', component:InicioComponent},  
  {path: 'contacto', component:ContactoComponent},
  //{path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
