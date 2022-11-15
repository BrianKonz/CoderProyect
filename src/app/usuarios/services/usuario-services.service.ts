import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }


  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`, {
     headers: new HttpHeaders({
       'content-type': 'application/json',
       'encoding': 'UTF-8'
     })
    })
   }
 
   obtenerUsuario(id: number): Observable<Usuario> {
     return this.http.get<Usuario>(`${environment.api}/usuarios/${id}`, {
     headers: new HttpHeaders({
       'content-type': 'application/json',
       'encoding': 'UTF-8'
     })
    }).pipe(
     catchError(this.manejarError)
    )
   }
 
   agregarUsuario(usuario: Usuario) {
     this.http.post(`${environment.api}/usuarios/`, usuario, {
       headers: new HttpHeaders({
         'content-type': 'application/json',
         'encoding': 'UTF-8'
       })
      }).pipe(
       catchError(this.manejarError)
      ).subscribe()
   }
 
   editarUsuario(usuario: Usuario) {
     this.http.put(`${environment.api}/usuarios/${usuario.id}`, usuario).pipe(
       catchError (this.manejarError)
     ).subscribe()
   }
 
   eliminarUsuario(id: number) {
     this.http.delete<Usuario>(`${environment.api}/usuarios/${id}`).pipe(
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
