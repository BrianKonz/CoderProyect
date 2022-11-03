import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/cursos/models/curso.interface';
import { CursoService } from 'src/app/cursos/services/curso.service';



@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>

  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  eliminarCurso(id: number) {
    this.cursoService.eliminarCursos(id);
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['cursos/editar', {
      id: curso.id,
      nombre: curso.nombre,
      comision: curso.comision,
      profesor: curso.profesor,
      fechaInicio: curso.fechaInicio,
      fechaFin: curso.fechaFin,
      inscrpcionAbierta: curso.inscripcionAbierta
    }])
  }

}
