import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/cursos/models/curso.interface';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  
  formAgregarCurso: FormGroup;

  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { 
    this.formAgregarCurso = new FormGroup ( {
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      inscripcionAbierta: new FormControl(),
    });
  }

  agregarCurso() {
    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formAgregarCurso.value.nombre,
      comision: this.formAgregarCurso.value.comision,
      profesor: this.formAgregarCurso.value.profesor,
      fechaInicio: this.formAgregarCurso.value.fechaInicio,
      fechaFin: this.formAgregarCurso.value.fechaFin,
      inscripcionAbierta: this.formAgregarCurso.value.inscripcionAbierta,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg',
    }
    this.cursoService.agregarCurso(curso);
    console.log(curso)
    this.router.navigate(['cursos', 'listar'])
  }

  ngOnInit(): void {
  }

}
