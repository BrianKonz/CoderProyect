import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso.interface';
import { cargarCursos, cursosCargados } from 'src/app/state/actions/cursos.action';
import { AppState } from 'src/app/state/app.state';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent implements OnInit {

  constructor(
    private cursosService: CursoService,
    private store: Store<AppState>
  ) { 
    this.store.dispatch(cargarCursos());
  }

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.store.dispatch(cursosCargados({ cursos: cursos }))
      console.log('se agregaron los cursos al store')
    })
  }

}
