import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../../models/curso.interface';


@Injectable()
export class CursoService {

  constructor(
    private http: HttpClient
  ) { 
    
  }

  obtenerCursos(): Observable<Curso[]> {
   return this.http.get<Curso[]>(`${environment.api}/Cursos`, {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'encoding': 'UTF-8'
    })
   })
  }

  obtenercurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${environment.api}/Cursos/${id}`, {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'encoding': 'UTF-8'
    })
   }).pipe(
    catchError(this.manejarError)
   )
  }

  agregarCurso(curso: Curso) {
    this.http.post(`${environment.api}/Cursos/`, curso, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
     }).pipe(
      catchError(this.manejarError)
     ).subscribe()
  }

  editarCurso(curso: Curso) {
    this.http.put(`${environment.api}/Cursos/${curso.id}`, curso).pipe(
      catchError (this.manejarError)
    ).subscribe()
  }

  eliminarCursos(id: number) {
    this.http.delete<Curso>(`${environment.api}/Cursos/${id}`).pipe(
      catchError (this.manejarError)
    ).subscribe()
}

private manejarError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent){
    console.warn('Error del lado del cliente: ', error.error.message)
  }else {
    console.warn('Error del lado del servidor: ', error.error.message)
  }
  return throwError(() => new Error('Error en la comunicación Http'))
}
}
