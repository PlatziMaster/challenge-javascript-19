# 🧼 Challenge JavaScript 19

Arrays Methods.

## 🧼 ¿En qué consiste?

A continuación tendrás 13 retos con 13 métodos diferentes que podemos aplicarle a los arrays en JavaScript. La idea es que descubras cuál es el resultado de cada ejercicio para reforzar los conceptos sobre métodos de los arrays.

> * Recomendación #1: Evita copiar y pegar el código para saber el resultado. Transcríbelo ! Tomará más tiempo pero tendrás más agilidad en la escritura de código y también, lograrás recordar estos métodos con mayor facilidad.
> * Recomendación #2: Investiga sobre cada uno de estos métodos por tu cuenta. Lee de qué tratan y para qué sirven. Así, la solución a cada uno de estos ejercicios tendrá muchísimo más sentido. Te recomendamos [MDN web docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array).

1. [shift()](#1-shift)
2. [unshift()](#2-unshift)
3. [concat()](#3-concat)
4. [push()](#4-push)
5. [pop()](#5-pop)
6. [splice()](#6-splice)
7. [entries()](#7-entries)
8. [map()](#8-map)
9. [reverse()](#9-reverse)
10. [join()](#10-join)
11. [find()](#11-find)
12. [fill()](#12-fill)
13. [reduce()](#13-reduce)

### 1. shift()

¿Cuál es el resultado del siguiente código?

```
var acidFruits = ["🍓", "🍋", "🍊"];
var modification = acidFruits.shift(); 

console.log(acidFruits);
console.log(modification); 

🍓 shift elimina el elemento seleccionado al principio del array

```

### 2. unshift()

¿Cuál es el resultado del siguiente código?

```
var teachers = ["Oscar"];
teachers.unshift("Facundo");
teachers.unshift("Nicolas", "Pablo");
console.log(teachers);

según el orden de las funciones se agrego al array a facundo, y luego a Nicolas y Pablo

```

### 3. concat()

¿Cuál es el resultado del siguiente código?

```
const air = ["🚀"];
const rail = ["🚊"];
const transportationModes = air.concat(rail);

console.log(transportationModes);

esta funcion concatena estos dos strings, a const 'air' le concatena 'rail'

```

### 4. push()

¿Cuál es el resultado del siguiente código?

```
const players = ["Sofía", "Laura"];
const totalPlayers = players.push("Juan", "Mateo");

console.log(players);
console.log(totalPlayers);

push al contrario de unshift coloca en el array los dos elementos nuevos al final del mismo

```

### 5. pop()

¿Cuál es el resultado del siguiente código?

```
const computers = ["💻", "🖥"];
const totalComputers = computers.pop();

console.log(computers);
console.log(totalComputers);

pop quita el elemento de al final del array
```

### 6. splice()

¿Cuál es el resultado del siguiente código?

```
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
days.splice(1, 0, 'Wed');
console.log(days);

splice quita los elementos seleccionado de 0 - 5 en este caso quita el martes, miercoles, y viernes.


```

### 7. entries()

¿Cuál es el resultado del siguiente código?

```
const fastFood = ['🌭', '🍔', '🍟', '🍕'];
const iterator = fastFood.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);

entries retorna un nuevo objeto a partir del array que seleccionemos, por ejemplo aqui estamos creado un nuevo objeto a partir de 🌭 y 🍔
```

### 8. map()

¿Cuál es el resultado del siguiente código?

```
const numbers = [32, 45, 86, 99];
const multiplication = numbers.map(n => n * 3);

console.log(multiplication);

map transforma los numeros de acuerdo a los parametros que le pongamos en la funcion que se describe arriba

```

### 9. reverse()

¿Cuál es el resultado del siguiente código?

```
const weather = ['🌤', '🌧'];
const reversed = weather.reverse();

console.log(reversed);
console.log(weather);

retorna en reversa la lista del array

```

### 10. join()

¿Cuál es el resultado del siguiente código?

```
const phrase = ['Nunca', 'Pares', 'De', 'Aprender'];

console.log(phrase.join());
console.log(phrase.join(''));
console.log(phrase.join('-'));

en el primer caso, no pasa nada, solo retorna las palabrascon una coma.
en el segundo caso solamente elimina las comas que hay entre cada uno
en el tercer caso entre cada palabra pone una -


```

### 11. find()

¿Cuál es el resultado del siguiente código?

```
const primeNumbers = [199, 211, 223, 227, 229, 233];
const found = primeNumbers.find(number => number < 200);

console.log(found);

con find en esta funcion estamos retornando numeros menores a 200

```

### 12. fill()

¿Cuál es el resultado del siguiente código?

```
const pairNumbers = [2, 10, 14, 98];

console.log(pairNumbers.fill(0, 2, 4));  // llena de ceros desde la posiscion 2 a la 4 
console.log(pairNumbers.fill(34, 1));   // llena de 34 desde la posiscion 1
console.log(pairNumbers.fill(6));     // llena de 6 el array

```

### 13. reduce()

¿Cuál es el resultado del siguiente código?

```
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})

suma todos los numeros dando como resultado 10

```


## 🧼 Pasos a seguir:

1. Hacer un "Fork" de este proyecto.
2. Revolver los retos propuestos.
3. Crear un Pull Request hacia este repositorio.

## 🧼 ¿Cómo contribuir?

Si quieres agregar o mejorar algo, te invito a colaborar directamente en este repositorio: [challenge-javascript-19](https://github.com/platzimaster/challenge-javascript-19/)

## 🧼 Licencia

challenge-javascript-19 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
