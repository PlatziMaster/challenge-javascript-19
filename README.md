# 🧼 Challenge JavaScript 19

Arrays Methods.

## 🎏 ¿En qué consiste?

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
```

### 2. unshift()

¿Cuál es el resultado del siguiente código?

```
var teachers = ["Oscar"];
teachers.unshift("Facundo");
teachers.unshift("Nicolas", "Pablo");
console.log(teachers);
```

### 3. concat()

¿Cuál es el resultado del siguiente código?

```
const air = ["🚀"];
const rail = ["🚊"];
const transportationModes = air.concat(rail);

console.log(transportationModes);
```

### 4. push()

¿Cuál es el resultado del siguiente código?

```
const players = ["Sofía", "Laura"];
const totalPlayers = players.push("Juan", "Mateo");

console.log(players);
console.log(totalPlayers);
```

### 5. pop()

¿Cuál es el resultado del siguiente código?

```
const computers = ["💻", "🖥"];
const totalComputers = computers.pop();

console.log(computers);
console.log(totalComputers);
```

### 6. splice()

¿Cuál es el resultado del siguiente código?

```
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
days.splice(1, 0, 'Wed');
console.log(days);
```

### 7. entries()

¿Cuál es el resultado del siguiente código?

```
const fastFood = ['🌭', '🍔', '🍟', '🍕'];
const iterator = fastFood.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);
```

### 8. map()

¿Cuál es el resultado del siguiente código?

```
const numbers = [32, 45, 86, 99];
const multiplication = numbers.map(n => n * 3);

console.log(multiplication);
```

### 9. reverse()

¿Cuál es el resultado del siguiente código?

```
const weather = ['🌤', '🌧'];
const reversed = weather.reverse();

console.log(reversed);
console.log(weather);
```

### 10. join()

¿Cuál es el resultado del siguiente código?

```
const phrase = ['Nunca', 'Pares', 'De', 'Aprender'];

console.log(phrase.join());
console.log(phrase.join(''));
console.log(phrase.join('-'));
```

### 11. find()

¿Cuál es el resultado del siguiente código?

```
const primeNumbers = [199, 211, 223, 227, 229, 233];
const found = primeNumbers.find(number => number < 200);

console.log(found);
```

### 12. fill()

¿Cuál es el resultado del siguiente código?

```
const pairNumbers = [2, 10, 14, 98];

console.log(pairNumbers.fill(0, 2, 4));
console.log(pairNumbers.fill(34, 1));
console.log(pairNumbers.fill(6));
```

### 13. reduce()

¿Cuál es el resultado del siguiente código?

```
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})
```


## 🧼 Pasos a seguir:

1. Hacer un "Fork" de este proyecto.
2. Revolver los retos propuestos.
3. Crear un Pull Request hacia este repositorio.

## 🧼 ¿Cómo contribuir?

Si quieres agregar o mejorar algo, te invito a colaborar directamente en este repositorio: [challenge-javascript-19](https://github.com/platzimaster/challenge-javascript-19/)

## 🧼 Licencia

challenge-javascript-19 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
