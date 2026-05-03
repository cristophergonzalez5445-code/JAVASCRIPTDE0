// ESTRUCTURA DE CONTROL CONDICIONAL IF

let clima = "frio";

if (clima === "frio") {
    console.log("Ponte un abrigo!")
} 
else if (clima === "calor") {
    console.log("Ponte una camiseta!")
} else { // 'de otro modo' o 'de otra forma'
    console.log("A caray pues que pregunte?")
}

/* 
Un else if en JavaScript se usa cuando tienes que tomar decisiones en tu código y necesitas 
verificar varias condiciones diferentes, pero solo quieres que una de ellas sea verdadera. */

/* EJEMPLO 1
Imagina que trabajamos para el INE yq ueremos mencionarle que personas son realmente mayores de edad y quienes no, entonces...
 */

let edad = 18
if (edad >= 18) {
    console.log("Eres mayor de edad.")
} else {
    console.log("Eres menor de edad.")
}

/* EJEMPLO 2
Imagina esto:
Estás en un restaurante y el mesero te pregunta qué quieres comer. Las opciones son:

Pizza
Pasta
Ensalada
El mesero solo te traerá una de esas opciones dependiendo de lo que elijas.

En programación, eso sería algo así:
*/

let opcion = "Pizza"
if (opcion === "Pizza") {
    console.log("Has pedido una pizza.");
  } else if (opcion === "Pasta") {
    console.log("Has pedido una pasta.");
  } else if (opcion === "Ensalada") {
    console.log("Has pedido una ensalada.");
  } else {
    console.log("Esa opción no está en el menú.");
  }

/*
¿Cuándo lo usas?
Cuando tienes varias condiciones diferentes que verificar.
Cuando solo quieres ejecutar una opción entre todas las posibles.
Es como decir: "Si no es la primera opción, entonces revisa la segunda, y si 
tampoco es esa, revisa la siguiente".

¿Por qué no usar muchos if por separado?

Si usas solo if (sin else if), el código revisará todas las condiciones, incluso
 si una ya es verdadera. Esto puede hacer que el programa sea menos eficiente o 
 que dé resultados inesperados.

Con else if, en cuanto una condición se cumple, ya no revisa las demás. 

En resumen, usa else if cuando tengas varias opciones posibles, pero solo quieras
 ejecutar una de ellas. ¡Es como elegir el platillo perfecto del menú!
*/

/* EJERCICIO 1
    Crea un código que diga si hoy es fin de semana o día laboral. */

let dia = "sábado";

if (dia === "sábado" || dia === "domingo") {
  console.log("Hoy es fin de semana");
} else {
  console.log("Hoy es día laboral");
}


// ESTRUCTURA DE CONTROL CICLICA FOR

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let inicio = 0; inicio <= 100; inicio += 25) {
    console.log("FOR tipo 1", inicio) 
}

for (let inicio = 0; inicio <= 100;) {
    console.log("FOR tipo 2",inicio) 
    inicio += 25
}

/* Haz un programa que imprima los días de la semana usando un arreglo */

let diaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
//Un arreglo es una estructura de datos que se puede  almacenar multiples valores en una sola variable.
//Si un arreglo es de tamaño 7, el indice va de 0 a 6 contando 0 como la posición inicial

for (let i = 0; i < diaSemana.length; i++) {
    console.log(diaSemana[i]);
}

/* EJERCICIO 2
    **Imprime números pares del 1 al 20.**

Usa un ciclo **for** para imprimir solo números pares. Pista: Usa el operador `%` para saber si un número es divisible entre 2. */

let pares = ["1", "2", "3", "4", "5", "6", "7", "8","9","10","11","12","13","14","15","16","17","18","19","20"]

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/* EJERCICIO 3
    **Crea un programa que te pregunte tu edad y te diga cuántos años te faltan para cumplir 100.** */

let edad = prompt("¿Cuántos años tienes?");
edad = Number(edad);

let faltan = 100 - edad;

console.log("Te faltan " + faltan + " años para cumplir 100 ");