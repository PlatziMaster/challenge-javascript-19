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

const primeNumbers = [199, 211, 223, 227, 229, 233];
const found = primeNumbers.find(number => number < 200);

console.log(found);