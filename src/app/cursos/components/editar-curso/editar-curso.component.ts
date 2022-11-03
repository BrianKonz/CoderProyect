import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../models/curso.interface';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  formEditarCurso!: FormGroup;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router
  ) {}


  ngOnInit(): void {
    //paramMap es un observable al cual me puedo suscribir
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0');
      this.formEditarCurso = new FormGroup ( {
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        comision: new FormControl(parametros.get('comision'), [Validators.required]),
        profesor: new FormControl(parametros.get('profesor'), [Validators.required]),
        fechaInicio: new FormControl(parametros.get('fechaInicio'), [Validators.required]),
        fechaFin: new FormControl(parametros.get('fechaFin'), [Validators.required]),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta')),
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
      imagen: '',
      id: this.id
    }
    this.cursoService.editarCurso(c);
    this.router.navigate(['cursos/listar'])
  }
}
