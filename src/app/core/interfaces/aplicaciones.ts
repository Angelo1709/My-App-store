import { Descripcion } from "./descripcion"

export interface Aplicaciones {
    id:number
    nombre:string
    imagen:string
    tipo:string
    link:string
    descripcion: Descripcion[]
}
