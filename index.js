let acidFruits = ["🍓","🍋","🍊"]
var modificacion = acidFruits.shift()

console.log(acidFruits)
console.log(modificacion)



var teachers = ["Oscar"];
teachers.unshift("Facundo");
teachers.unshift("Nicolas", "Pablo");
console.log(teachers);



const air = ["🚀"];
const rail = ["🚊"];
const transportationModes = air.concat(rail);

console.log(transportationModes);




const players = ["Sofía", "Laura"];
const totalPlayers = players.push("Juan", "Mateo");

console.log(players);
console.log(totalPlayers);




const computers = ["💻", "🖥"];
const totalComputers = computers.pop();

console.log(computers);
console.log(totalComputers);



const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
days.splice(1, 0, 'Wed');
console.log(days);




const fastFood = ['🌭', '🍔', '🍟', '🍕'];
const iterator = fastFood.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);




const numbers = [32, 45, 86, 99];
const multiplication = numbers.map(n => n * 3);

console.log(multiplication);


const weather = ['🌤', '🌧'];
const reversed = weather.reverse();

console.log(reversed);
console.log(weather);



const phrase = ['Nunca', 'Pares', 'De', 'Aprender'];

console.log(phrase.join());
console.log(phrase.join(''));
console.log(phrase.join('-'));



const primeNumbers = [199, 211, 223, 227, 229, 233];
const found = primeNumbers.find(number => number < 200);

console.log(found);



const pairNumbers = [2, 10, 14, 98];

console.log(pairNumbers.fill(0, 2, 4));  // llena de ceros desde la posiscion 2 a la 4 
console.log(pairNumbers.fill(34, 1));   // llena de 34 desde la posiscion 1
console.log(pairNumbers.fill(6));     // llena de 6 el array


