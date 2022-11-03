import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SesionService } from './services/sesion.service';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    Error404Component,
    ToolbarComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    ToolbarComponent,
  ],
  providers: [
    SesionService,
  ],
})
export class CoreModule { }
