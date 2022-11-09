import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Curso } from '../../models/curso.interface';


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

  obtenercurso(id: number): Observable<Curso> {
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id)[0]) 
    )
  }

  agregarCurso(curso: Curso) {
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos)
  }

  editarCurso(curso: Curso) {
    let indice = this.cursos.findIndex((c: Curso) => c.id === curso.id)

    if(indice > -1) {
      this.cursos[indice] = curso;
    }

    this.cursosSubject.next(this.cursos);
  }

  eliminarCursos(id: number) {
    let indice = this.cursos.findIndex((c: Curso) => c.id == id)

    if(indice > -1) {
      this.cursos.splice(indice, 1)
    }

    this.cursosSubject.next(this.cursos);
  }
}
