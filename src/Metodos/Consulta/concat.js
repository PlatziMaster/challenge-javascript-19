//el metodo concat() se usa para unir dos o mas arrays. este metodo no cambia los arrays existentes, sino que devuelve un nuevo array.

//✅ este metodo no modifica el array original sino que devuelve uno nuevo

const air = ['🚀'];
const rail = ['🚊'];

const transportationModes = air.concat(rail);

console.log(transportationModes); //(2) ["🚀", "🚊"]
