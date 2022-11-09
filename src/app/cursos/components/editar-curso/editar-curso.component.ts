import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../../models/curso.interface';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  formEditarCurso!: FormGroup;
  curso!: Curso;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router
  ) {}


  ngOnInit(): void {
    //paramMap es un observable al cual me puedo suscribir
    this.activatedRoute.paramMap.subscribe((parametros) => {

      this.curso = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        comision: parametros.get('comision') || '',
        profesor: parametros.get('profesor') || '',
        fechaInicio: new Date(parametros.get('fechaInicio') || ''),
        fechaFin: new Date (parametros.get('fechaFin') || ''),
        inscripcionAbierta: parametros.get('inscripcionAbierta') === 'true',
        imagen: parametros.get('imagen') || '',
      }

      this.formEditarCurso = new FormGroup ( {
        nombre: new FormControl(this.curso.nombre, [Validators.required]),
        comision: new FormControl(this.curso.comision, [Validators.required]),
        profesor: new FormControl(this.curso.profesor, [Validators.required]),
        fechaInicio: new FormControl(this.curso.fechaInicio, [Validators.required]),
        fechaFin: new FormControl(this.curso.fechaFin, [Validators.required]),
        inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),
        imagen: new FormControl(this.curso.imagen)
      });




    })
  }

  editarCurso() {
    let c: Curso = {
      nombre: this.formEditarCurso.value.nombre,
      comision: this.formEditarCurso.value.comision,
      profesor: this.formEditarCurso.value.profesor,
      fechaInicio: this.formEditarCurso.value.fechaInicio,
      fechaFin: this.formEditarCurso.value.fechaFin,
      inscripcionAbierta: this.formEditarCurso.value.inscripcionAbierta,
      imagen: this.curso.imagen,
      id: this.curso.id
    }
    this.cursoService.editarCurso(c);
    this.router.navigate(['cursos/listar'])
  }
}
