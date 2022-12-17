import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SesionService } from 'src/app/core/services/sesion.service';
import { loadSesionActiva } from 'src/app/core/state/sesion.actions';
import { Sesion } from 'src/app/models/sesion.interface';
import { Usuario } from 'src/app/models/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formAut: FormGroup;

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private store: Store<Sesion>
  ) {
    this.formAut = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
      admin: new FormControl(),
    }) 
   }

  ngOnInit(): void {
  }

  login(){
    let u: Usuario = {
      id: 0,
      usuario: this.formAut.value.usuario,
      contrasena: this.formAut.value.contrasena,
      admin: this.formAut.value.admin,
      edad: this.formAut.value.edad,
      apellido: this.formAut.value.apellido,
      curso: this.formAut.value.curso
    }
    this.sesionService.login(u).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadSesionActiva({usuarioActivo: usuario}))
      this.router.navigate(['inicio'])
    })
  }

}
