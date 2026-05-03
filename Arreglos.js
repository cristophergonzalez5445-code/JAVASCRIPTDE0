let frutas = ['manzana', 'pera', 'kiwi', 'tamarindo'];

let conteo = {};

//Ciclo For

    for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    if (conteo[fruta]) {
    conteo[fruta]++; 
    } else {
    conteo[fruta] = 1;
  }
}

    console.log(conteo);


//Ciclo while

let conteoWhile = {};

let i = 0;

while (i < frutas.length) {
  let fruta = frutas[i];

  if (conteoWhile[fruta]) {
    conteoWhile[fruta]++;
  } else {
    conteoWhile[fruta] = 1;
  }

  i++;
}

console.log(conteoWhile);