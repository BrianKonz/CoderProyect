import { Curso } from "./curso.interface";

export interface CursoState {
    cargando: boolean;
    cursos: Curso [];
}