import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ]

})
export class SharedModule { }
