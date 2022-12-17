import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { Error404Component } from './components/error404/error404.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SesionService } from './services/sesion.service';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer, sesionFeatureKey } from './state/sesion.reducer';



@NgModule({
  declarations: [
    InicioComponent,
    Error404Component,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forFeature(sesionFeatureKey, reducer),
  ],
  exports: [
    ToolbarComponent,
  ],
  providers: [
    SesionService,
  ],
})
export class CoreModule { }
