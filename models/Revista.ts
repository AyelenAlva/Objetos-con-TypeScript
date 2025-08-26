import { Material } from "./Material.js";

export class Revista extends Material {
  public edicion: string;

  constructor(id: number, titulo: string, autor: string, edicion: string) {
    super(id, titulo, autor);
    this.edicion = edicion;
  }

  public mostrarInfo(): void {
    console.log(`Informacion de la Revista`);
    console.log(`ID: ${this.id}`);
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Edición: ${this.edicion}`);
    console.log(`Disponibilidad: ${this.estaDisponible ? 'Disponible' : 'No disponible'}`);
  }
}