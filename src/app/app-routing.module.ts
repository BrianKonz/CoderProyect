import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './core/components/error404/error404.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';

const routes: Routes = [
  { path: 'inicio', component:InicioComponent, canActivate: [AutenticacionGuard]},  

  { path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AutenticacionGuard]},

  { path: 'autenticacion',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((m) => m.AutenticacionModule)},

  { path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
    canActivate: [AutenticacionGuard]
  },
  { path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
    canActivate: [AutenticacionGuard]
  },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },  
  
  { path: '**', component:Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
