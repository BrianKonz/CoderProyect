import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso.interface';
import { CursoService } from 'src/app/cursos/services/curso.service';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion.interface';
import { CursoState } from 'src/app/models/cursos.state';
import { Store } from '@ngrx/store';
import { loadCursos, loadCursosSuccess } from '../../state/cursos.actions';
import { selectStateCargando, selectStateCursos } from '../../state/cursos.selectors';
import { Usuario } from 'src/app/models/usuario.interface';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit, OnDestroy {
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>;
  cargando$!: Observable<boolean>;
  filtro:  string = '';
  suscripcionCursos!: Subscription;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private sesionService: SesionService,
    private store: Store<CursoState>,
    private storeUsuario: Store<Usuario>
  ) {
   }

  ngOnInit(): void {
      this.suscripcionCursos = this.cursoService.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.store.dispatch(loadCursosSuccess({cursos}));
    });
    this.cursos$ = this.store.select(selectStateCursos)
    this.cargando$ = this.store.select(selectStateCargando)
    this.sesion$ = this.storeUsuario.select(selectSesionActiva)
    
  }

  ngOnDestroy(): void {
    this.suscripcionCursos.unsubscribe();
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
