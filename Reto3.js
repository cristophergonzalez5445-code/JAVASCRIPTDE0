//Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
let mislibros = [];

function agregarLibro(titulo) {
    mislibros.push(titulo);
    console.log("Libro agregado: " + titulo);
}

// Función para mostrar libros leídos
function mostrarLibrosLeidos() {
    console.log("Libros leídos:");

    for (let i = 0; i < mislibros.length; i++) {
        console.log((i + 1) + ". " + mislibros[i]);
    }
}

// Agregar libros
agregarLibro("Cien años de soledad");
agregarLibro("El principito");
agregarLibro("Harry Potter");

// Mostrar libros
console.log(mislibros);

/* **Reto 2: Edad en días**

Crea una función que reciba tu edad y devuelva cuántos días has vivido (aproximadamente).

**Pista:** Multiplica los años por 365. */

function edaddías(edad) {
    let días = 365 * edadd;
    return días;
}

let edadd = 15;
console.log("Tu edad en días es: " + edaddías(edadd));