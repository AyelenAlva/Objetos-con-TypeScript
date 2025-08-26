# 1. ¿Qué diferencia existe entre extends y implements en TypeScript?
extends: posibilita que una clase herede las características y los métodos de otra clase o de una clase abstracta. La subclase adquiere el comportamiento real de la clase madre.
implements: obliga a una clase a acatar un contrato establecido por una interfaz, lo que implica que debe llevar a cabo ciertas propiedades y métodos, aunque no hereda código real, sino únicamente la obligación de respetar lo estipulado. 

# 2. ¿Qué ventajas ofrece el tipado fuerte en funciones y clases?
- Identifica errores antes de la ejecución del programa (en el tiempo que se compila).
- Como el tipo de dato esperado siempre es conocido, favorece la lectura y entendimiento del código.
- Optimiza la asistencia de los editores de código y el autocompletado.
- Disminuye los errores durante la ejecución, lo que hace que el software sea más confiable y sencillo de mantener.

# 3. ¿Qué significa que una clase sea abstracta?
- Es una plantilla que no puede ser instanciada de forma directa.
- Establece métodos que las clases derivadas deben llevar a cabo.
- Garantiza que todas las subclases mantengan una estructura o comportamiento determinado y posibilita compartir código común.

# 4. ¿Por qué conviene usar getters y setters para el encapsulamiento?
- Hacen posible el control de la forma en que se accede o se cambia una propiedad protegida o privada.
- Permiten la realización de validaciones o transformaciones antes de modificar el valor de un atributo.
- Conservan la integridad de los datos y posibilitan cambios en la lógica interna sin tener un impacto en el resto del código.

# 5. Ejemplificar cómo tipar:
## a. Una función con parámetros obligatorios y opcionales.
- En TypeScript, los parámetros obligatorios son los que siempre se deben pasar al llamar la función.
- Los parámetros opcionales se indican con un signo ? y pueden o no pasarse.
- Tipar estos parámetros permite que el compilador sepa qué tipo de valor esperar para cada uno.

### Ejemplo conceptual:
Función que recibe un nombre (obligatorio) y un apellido (opcional).
El compilador sabe que nombre siempre será string y apellido puede ser string o undefined.

## b. Una función que devuelve una Promise.
- Cuando una función devuelve una Promise, se debe indicar el tipo de dato que resolverá esa promesa.
- Esto permite que TypeScript sepa qué tipo de valor estará disponible cuando la promesa se cumpla y poder manejarlo correctamente.

### Ejemplo conceptual:
Función que devuelve una promesa de un número.
TypeScript entiende que al hacer .then() se recibirá un valor de tipo number.