//el metodo push() añade uno o mas elementos al final de un array y devuelve una nueva longitud del array

const players = ['Sofia', 'Laura'];
const totalPlayers = players.push('Juan', 'Rafa');

console.log(totalPlayers); //4
console.log(players); // (4) ["Sofia", "Laura", "Juan", "Rafa"]
