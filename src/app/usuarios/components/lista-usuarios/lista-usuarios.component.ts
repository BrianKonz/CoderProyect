import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion.interface';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuarioService } from '../../services/usuario-services.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios$!: Observable<Usuario[]>
  sesion$!: Observable<Sesion>;
  filtro: string = "";
  
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private sesionService: SesionService
  ) { }

  ngOnInit(): void {
    this.usuarios$ = this.usuarioService.obtenerUsuarios();
    this.sesion$ = this.sesionService.obtenerSesion()
  }

  columnas: string[] =['ID','Nombre', 'Apellido', 'Edad', 'Curso', 'Acciones']

  editarUsuario(usuario: Usuario) {
    this.router.navigate(['usuarios/editarUsuario', {
      id: usuario.id,
      usuario: usuario.usuario,
      apellido: usuario.apellido,
      edad: usuario.edad,
      contrasena: usuario.contrasena,
      curso: usuario.curso,
      admin: usuario.admin,
    }])
  }

  eliminarUsuario(id: number) {
    this.usuarioService.eliminarUsuario(id);
    this.usuarios$ = this.usuarioService.obtenerUsuarios();
  }

  filtroAlumnos () {
    
    this.usuarios$=this.usuarioService.obtenerUsuarios().pipe(
      map((usuarios: Usuario[]) => usuarios.filter((usuario: Usuario) => 
      usuario.usuario.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase()))))
  }

  irACursos () {
    this.router.navigate(['cursos/listar'])
  }
}
