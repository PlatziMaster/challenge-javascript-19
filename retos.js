// Shift() 

var acidFruits = ["🍓", "🍋", "🍊"]; 
var modification = acidFruits.shift();

console.log(acidFruits);
console.log(modification);


// El resultado de este codigo es que elimina el primer elemento del array [0] = fresa 
// quedando un valor de  0: [ "🍋"] 1: ["🍊"] y luego retorna 🍓 
// este metodo modifica la longitud del array 

// (2) ["🍋", "🍊"]
// 0: "🍋"
// 1: "🍊"
// length: 2
// __proto__: Array(0)
// 🍓






// unshift() 

var teachers = ["Oscar"];
teachers.unshift("Facundo");
teachers.unshift("Nicolas" , "Pablo");
console.log(teachers);

// El resultado de este codigo es que este metodo ha agregado los elementos [facundo, Nicolas, Pablo] 
// Al inicio del array devolviendo una nueva longitud del array 


// (4) ["Nicolas", "Pablo", "Facundo", "Oscar"]
// 0: "Nicolas"
// 1: "Pablo"
// 2: "Facundo"
// 3: "Oscar"
// length: 4
// __proto__: Array(0)






//concat()

const air = ["🚀"];
const rail = ["🚊"];
const transportationModes = air.concat(rail);

console.log(transportationModes);

// El resultado de este codigo es un nuevo array; lo que se genera es la union de los dos elementos 

// (2) ["🚀", "🚊"]0: "🚀"1: "🚊"length: 2__proto__: Array(0)






//push()

const players = ["Sofia", "Laura"];
const totalPlayers = players.push("Juan", "Mateo");

console.log(players);
console.log(totalPlayers);



// El resultado de este codigo es que los elementos.push se van al final del array
// Generando una nueva longitud del array

// (4) ["Sofia", "Laura", "Juan", "Mateo"]
// 0: "Sofia"
// 1: "Laura"
// 2: "Juan"
// 3: "Mateo"
// length: 4
// __proto__: Array(0)







//pop()

const computers = ["💻", "🖥"];
const totalComputers = computers.pop();

console.log(computers);
console.log(totalComputers);

// El resultado de este codigo es que el metodo .pop() hara que se elimine el ultimo elemento de 
// la coleccion y luego lo retorne, generando una nueva logitud del array

//0: "💻"length: 1__proto__: Array(0)  🖥






//. splice()


const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
days.splice(1, 0, 'Wed');
console.log(days);


// El resultado de este codigo es que el metodo .splice() cambia todo el contenido del array 
// agregando nuevos elementos

// (6) ["Mon", "Wed", "Tue", "Wed", "Thu", "Fri"]
// 0: "Mon"
// 1: "Wed"
// 2: "Tue"
// 3: "Wed"
// 4: "Thu"
// 5: "Fri"
//length: 6
//__proto__: Array(0)







//entries()

const fastFood = ['🌭', '🍔', '🍟', '🍕'];
const iterator = fastFood.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);


// El resultado de este codigo es que hace retornar un nuevo array iterator clave/valor para cada indice de la matriz

// (2) [1, "🍔"]
// 0: 1
// 1: "🍔"
// length: 2
// __proto__: Array(0)






//map()


const numbers = [32, 45, 86, 99];
const multiplication = numbers.map(n => n * 3);

console.log(multiplication);


// El resultado de este codigo es que se crea un nuevo array con los resultados de la operacion 
// aplicado a cada uno de los elementos

// (4) [96, 135, 258, 297]
// 0: 96
// 1: 135
// 2: 258
// 3: 297
// length: 4
// __proto__: Array(0)






//reverse()

const weather = ['🍔', '🌧'];
const reversed = weather.reverse();

console.log(reversed);
console.log(weather);


// El resultado de este codigo es que se invierte el orden de los elementos gracias a la accion de 
// el metodo reverse() ; lo que esta de primero en el array se imprime de ultimo. 


// (2) ["🌧", "🍔"]
// 0: "🌧"
// 1: "🍔"
// length: 2
// __proto__: Array(0)







// join()

const phrase = ['Nunca', 'Pares', 'De', 'Aprender'];

console.log(phrase.join());
console.log(phrase.join(''));
console.log(phrase.join('-'));


// El resultado de este codigo es que atraves del join() une todos los elementos del array en una sola cadena

//Nunca,Pares,De,Aprender
//NuncaParesDeAprender
//Nunca-Pares-De-Aprender






//find()

const primeNumbers = [199, 211, 223, 227, 229, 233];
const found = primeNumbers.find(number => number < 200);

console.log(found);



// El resultado de este codigo es 199 puesto que el metodo devuelve el valor del primer elemento 
// en este caso el numero < 200. 





//fill()

const pairNumbers = [2, 10, 14, 98];

console.log(pairNumbers.fill(0, 2, 4));
console.log(pairNumbers.fill(34, 1));
console.log(pairNumbers.fill(6));


//(4) [2, 10, 0, 0]0: 61: 62: 63: 6length: 4__proto__: Array(0)
// (4) [2, 34, 34, 34]0: 61: 62: 63: 6length: 4__proto__: Array(0)
// (4) [6, 6, 6, 6]





//reduce()

[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  })

// El .reduce ejecuta una funcion reductora sobre cada elemento de array