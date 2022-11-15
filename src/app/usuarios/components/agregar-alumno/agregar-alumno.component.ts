import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuarioService } from '../../services/usuario-services.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {

  formAgregarUsuario: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.formAgregarUsuario = new FormGroup ( {
      usuario: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required]),
      admin: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
    });
   }

   agregarUsuario() {
    const usuarios: Usuario = {
      id: Math.round(Math.random() * 1000),
      usuario: this.formAgregarUsuario.value.usuario,
      apellido: this.formAgregarUsuario.value.apellido,
      edad: this.formAgregarUsuario.value.edad,
      curso: this.formAgregarUsuario.value.curso,
      admin: this.formAgregarUsuario.value.admin,
      contrasena: this.formAgregarUsuario.value.contrasena,
    }
    this.usuarioService.agregarUsuario(usuarios);
    this.router.navigate(['usuarios', 'listarUsuario'])
   }

  ngOnInit(): void {
  }

}
