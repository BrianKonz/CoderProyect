import { Usuario } from "./usuario.interface";

export interface Sesion {
    sesionActiva: boolean,
    usuarioActivo?: Usuario,
}