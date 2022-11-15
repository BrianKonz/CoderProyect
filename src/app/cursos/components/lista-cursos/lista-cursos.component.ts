import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso.interface';
import { CursoService } from 'src/app/cursos/services/curso.service';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion.interface';



@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>
  sesion$!: Observable<Sesion>;
  filtro:  string = '';

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private sesionService: SesionService
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
    this.sesion$ = this.sesionService.obtenerSesion()
  }

  eliminarCurso(id: number) {
    this.cursoService.eliminarCursos(id);
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['cursos/editar', {
      id: curso.id,
      nombre: curso.nombre,
      comision: curso.comision,
      profesor: curso.profesor,
      fechaInicio: curso.fechaInicio,
      fechaFin: curso.fechaFin,
      inscripcionAbierta: curso.inscripcionAbierta,
      imagen: curso.imagen
    }])
  }

  filtroCurso () {
    
    this.cursos$=this.cursoService.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => 
      curso.nombre.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase()))))
  }

}
