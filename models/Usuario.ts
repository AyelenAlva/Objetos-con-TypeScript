import { Material } from "./Material.js";
import { IUsuario } from "../interfaces/IUsuario.js";

export class Usuario implements IUsuario {
  public id: number;
  public nombre: string;
  private materialesPrestados: Material[];
  public ultimaPrestacion!: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
    this.materialesPrestados = [];
  }

  public prestar(material: Material): void {
    if (material.estaDisponible) {
      this.materialesPrestados.push(material);
      material.cambiarDisponibilidad = false;
      this.ultimaPrestacion = `Último material prestado: ${material.titulo}`;
      console.log(`${this.nombre} ha prestado el material "${material.titulo}".`);
    } else {
      console.log(`Lo sentimos, el material "${material.titulo}" no está disponible para prestamo.`);
    }
  }

  public mostrarPrestados(): void {
    if (this.materialesPrestados.length === 0) {
      console.log(`${this.nombre} no tiene materiales prestados.`);
      return;
    }
    console.log(`\n--- Materiales prestados por ${this.nombre} ---`);
    this.materialesPrestados.forEach(material => material.mostrarInfo());
  }

  public mostrarUltimaPrestacion(): void {
    console.log(this.ultimaPrestacion);
  }
}