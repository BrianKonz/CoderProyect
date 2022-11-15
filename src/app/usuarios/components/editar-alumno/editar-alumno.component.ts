import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuarioService } from '../../services/usuario-services.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  formEditarAlumno!: FormGroup;
  usuario!: Usuario;

  constructor(
    private activateRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      this.usuario = {
        id: parseInt(parametros.get('id') || '0'),
        usuario: parametros.get('usuario') || '',
        apellido: parametros.get('apellido') || '',
        edad: parseInt(parametros.get('edad') || '0'),
        contrasena: parametros.get('contrasena') || '',
        curso: parametros.get('curso') || '',
        admin: parametros.get('admin') === 'true',
      }

      this.formEditarAlumno = new FormGroup ( {
        usuario: new FormControl(this.usuario.usuario, [Validators.required]),
        apellido: new FormControl(this.usuario.apellido, [Validators.required]),
        edad: new FormControl(this.usuario.edad, [Validators.required]),
        contrasena: new FormControl(this.usuario.contrasena, [Validators.required]),
        curso: new FormControl(this.usuario.curso, [Validators.required]),
        admin: new FormControl(this.usuario.admin)
      });
    })
  }

  editarAlumno() {
    let u: Usuario = {
      usuario: this.formEditarAlumno.value.usuario,
      apellido: this.formEditarAlumno.value.apellido,
      edad: this.formEditarAlumno.value.edad,
      contrasena: this.formEditarAlumno.value.contrasena,
      curso: this.formEditarAlumno.value.curso,
      admin: this.formEditarAlumno.value.admin,
      id: this.usuario.id
    }
    this.usuarioService.editarUsuario(u);
    this.router.navigate(['usuarios/listarUsuario'])
  }

}
