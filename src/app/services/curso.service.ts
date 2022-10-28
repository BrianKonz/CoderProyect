import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Curso } from '../cursos/models/curso.interface';


@Injectable()
export class CursoService {
  private cursos: Curso [] = [

    {
      id: 0,
      nombre: 'Angular',
      comision: '32310',
      profesor: 'Keven',
      fechaInicio: new Date(2022, 0, 1),
      fechaFin: new Date(2022, 1, 28),
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
    },
    {
      id: 1,
      nombre: 'Java',
      comision: '33411',
      profesor: 'Pedro',
      fechaInicio: new Date(2022, 4, 1),
      fechaFin: new Date(2022, 5, 28),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
    },
    {
      id: 2,
      nombre: 'Angular',
      comision: '34512',
      profesor: 'Santiago',
      fechaInicio: new Date(2022, 8, 1),
      fechaFin: new Date(2022, 9, 28),
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
    },

  ]
  private cursosSubject: BehaviorSubject<Curso[]> = new BehaviorSubject(this.cursos);

  constructor() { 
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCursos(): Observable<Curso[]> {
    return this.cursosSubject.asObservable();
  }

  obtenercurso(id: number): Observable<Curso[]> {
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id == id)) 
    )
  }

  agregarCurso(curso: Curso) {
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos)
  }

  editarCurso(curso: Curso) {
    
  }

  eliminarCurso(id: number) {
    
  }
}
