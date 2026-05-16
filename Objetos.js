// libro

const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",

    // Lista opcional de capítulos
    capitulos: [],

    // mostrar información del libro
    describirLibro: function () {
        console.log(
            `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
        );
    },

    //  agregar capítulos
    agregarCapitulo: function (capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado correctamente.`);
    },

    // eliminar capítulos
    eliminarCapitulo: function (capitulo) {
        const indice = this.capitulos.indexOf(capitulo);

        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${capitulo}" eliminado correctamente.`);
        } else {
            console.log("El capítulo no existe.");
        }
    }
};

// Uso de los métodos

libro.describirLibro();

libro.agregarCapitulo("Capítulo 1: Macondo");
libro.agregarCapitulo("Capítulo 2: La familia Buendía");

console.log(libro.capitulos);

libro.eliminarCapitulo("Capítulo 1: Macondo");

console.log(libro.capitulos);