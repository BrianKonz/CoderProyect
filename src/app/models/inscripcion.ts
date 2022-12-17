import { Curso } from "./curso.interface";
import { Usuario } from "./usuario.interface";

export interface Inscripcion {
    id: number;
    estudiante: Usuario;
    curso: Curso;
}