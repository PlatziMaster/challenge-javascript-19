//El metodo find() devuelve el valor del primer elemento del array que cumple con la funcion proporcionada.

//si necesitas el indice del elemento en el array utiliza findIndex()

//si necesitas encontrar si un valor existe en un array, utiliza Array.prototype.includes()

const primeNumbers = [199, 211, 223, 227, 229, 233];
const found = primeNumbers.find((n) => n < 200);

console.log(found); //199
