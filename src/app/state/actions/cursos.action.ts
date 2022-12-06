import { createAction, props } from "@ngrx/store";
import { Curso } from "src/app/models/curso.interface";

export const cargarCursos = createAction(
    '[Lista Cursos] Cargar Cursos'
)

export const cursosCargados = createAction(
    '[Lista Cursos] Cursos Cargados',
    props<{cursos: Curso []}>()
)