
//Clase FUNCIONES APUNTES...

/* Una función es un bloque de codigo diseñado para realizar una tarea especifica (receta)
Las funciones se pueden reutilizar en todo el programa */

// funcion clasica

function cuadrado(numero){
    let resultado = numero + numero;
    return resultado;
}
console.log(cuadrado(2));

function saludar(nombre) {
    console.log("Hola, " + nombre + "!")
}
saludar("Daniel"); // Salida: Hola, Daniel!
saludar("Caro");   // Salida: Hola, Caro!

//function sin input

function saludo() {
    console.log("¡Hola! Bienvenido a la programación en JavaScript.");
}

saludo();

//funcion flecha
//Un tipo de función que a traves de una flecha indica el bloque de codigo a ejecutar.

const saludarr = (nombre) => {
    console.log("Hola, " + nombre + "!")
}
saludarr("Dani");

//funcion anonima
// no tiene nombre definifo y se asigna a una variable para ejecutar de inmediato

const saluda = function(nombre) {

    console.log("Hola, " + nombre + "!");

};

saluda("María"); // Imprime: Hola, María!


// función con multiples parametros

function areaRectangulo (base, altura) {
    let area = base * altura;
    return area;
}

let base = 5;
let altura = 4;
let area= areaRectangulo (base,altura);

console.log("El area del rectangulo es " + area + " um");


//EJERCICIOS PRACTICA//

//Calculadora//
function sumar(a, b) {

    return a + b;

}

function restar(a, b) {

    return a - b;

}

function multiplicar(a, b) {

    return a * b;

}

function dividir(a, b) {

    if (b === 0) {

        return "Error: División por cero";

    }

    return a / b;

}

// Llamadas a las funciones

console.log("Suma: " + sumar(5, 3));

console.log("Resta: " + restar(5, 3));

console.log("Multiplicación: " + multiplicar(5, 3));

console.log("División: " + dividir(5, 0));