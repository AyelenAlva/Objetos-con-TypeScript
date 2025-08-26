import { Material } from "./Material.js";

export class Libro extends Material {
  public paginas: number;
  public genero?: string;

  constructor(id: number, titulo: string, autor: string, paginas: number, genero?: string) {
    super(id, titulo, autor);
    this.paginas = paginas;
    this.genero = genero;
  }

  public mostrarInfo(): void {
    console.log(` Información del Libro `);
    console.log(`ID: ${this.id}`);
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Páginas: ${this.paginas}`);
    if (this.genero) {
      console.log(`Género: ${this.genero}`);
    }
    console.log(`Disponibilidad: ${this.estaDisponible ? 'Disponible' : 'No disponible'}`);
  }
}