export interface Usuario {
    id: number,
    usuario: string;
    contrasena: string;
    admin?: boolean;
    apellido: string;
    edad: number;
    curso: string;
}
