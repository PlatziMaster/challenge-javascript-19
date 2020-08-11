//el metodo fill() cambia todos los elementos de un array por un valor estatico, desde el indice start(por defecto 0 ) hasta el indice end (por defecto array.length). Devuelve el arreglo modificado

// arr.fill(value[, start = 0[, end = this.length]])

const pairNumbers = [2, 10, 14, 98];

//llena el valor 0 desde la posicion 2 hasta la 4
console.log(pairNumbers.fill(0, 2, 4));
//(4) [2, 10, 0, 0]

//llena el valor 34 desde la posicion 1
console.log(pairNumbers.fill(34, 1));
//(4) [2, 34, 34, 34]

//llena el array con el valor 6
console.log(pairNumbers.fill(6));
// (4) [6, 6, 6, 6]
