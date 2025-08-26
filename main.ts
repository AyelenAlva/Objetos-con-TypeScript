import { Libro } from "./models/Libro.js";
import { Revista } from "./models/Revista.js";
import { Usuario } from "./models/Usuario.js";
import { Material } from "./models/Material.js";

//  2 libros y 1 revista
const libro1 = new Libro(1, "Ciencia", "Fernandez ", 496, "Realismo");
const libro2 = new Libro(2, "Sol", "Ayelen Alva", 328);
const revista1 = new Revista(3, "Formosa", "Varios autores", "Septiembre");

const usuario1 = new Usuario(101, "Ana Alva");

const materiales: Material[] = [libro1, libro2, revista1];
materiales.forEach(material => material.mostrarInfo());

console.log("\n Proceso de Prestamo ");
usuario1.prestar(libro1);
usuario1.prestar(revista1);

console.log("\n    Prestar material no disponible ");
usuario1.prestar(libro1);

usuario1.mostrarPrestados();
usuario1.mostrarUltimaPrestacion();