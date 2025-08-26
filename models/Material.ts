import { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";

export abstract class Material implements IBibliotecaItem {
  public readonly id: number;
  public titulo: string;
  public autor: string;
  protected disponible: boolean;

  constructor(id: number, titulo: string, autor: string) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }

  public get estaDisponible(): boolean {
    return this.disponible;
  }

  public set cambiarDisponibilidad(estado: boolean) {
    this.disponible = estado;
  }

  public abstract mostrarInfo(): void;
}