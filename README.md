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
```

Resultado:

```
> ["🍋", "🍊"]
> "🍓"
```

Explicación:
El método `shift()` remueve el primer elemento de un arreglo y retorna dicho elemento, modificando el arreglo original.

### 2. unshift()

¿Cuál es el resultado del siguiente código?

```
var teachers = ["Oscar"];
teachers.unshift("Facundo");
teachers.unshift("Nicolas", "Pablo");
console.log(teachers);
```

Resultado:

```
> ["Nicolás", "Pablo", "Facundo", "Oscar"]
```

Explicación:
El método `unshift()` añade nuevos elementos al principio del arreglo. Primero, cuando se agrega el elemento "Facundo", el arreglo queda así:

```
["Facundo", "Oscar"]
```

Luego, al agregar los elementos "Nicolás" y "Pablo", el arreglo finalmente queda así:

```
["Nicolás", "Pablo", "Facundo", "Oscar"]
```

Este método retorna el nuevo tamaño del arreglo.

### 3. concat()

¿Cuál es el resultado del siguiente código?

```
const air = ["🚀"];
const rail = ["🚊"];
const transportationModes = air.concat(rail);

console.log(transportationModes);
```

Resultado:

```
> ["🚀", "🚊"]
```

Explicación:

El método `concat()` combina uno o varios arreglos, retornando el nuevo arreglo. `concat()` no modifica los arreglos originales.

### 4. push()

¿Cuál es el resultado del siguiente código?

```
const players = ["Sofía", "Laura"];
const totalPlayers = players.push("Juan", "Mateo");

console.log(players);
console.log(totalPlayers);
```

Resultado:

```
> ["Sofía", "Laura", "Juan", "Mateo"]
> 4
```

Explicación:

El método `push()` añade uno o más nuevos elementos al final del arreglo y retorna el nuevo tamaño del arreglo. En este caso, es de 4 elementos.

### 5. pop()

¿Cuál es el resultado del siguiente código?

```
const computers = ["💻", "🖥"];
const totalComputers = computers.pop();

console.log(computers);
console.log(totalComputers);
```

Resultado:

```
> ["💻"]
> "🖥"
```

Explicación:

El método `pop()` remueve el último elemento del arreglo y retorna el elemento eliminado. Modifica el arreglo original y no recibe parámetros.

### 6. splice()

¿Cuál es el resultado del siguiente código?

```
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
days.splice(1, 0, 'Wed');
console.log(days);
```

Resultado:
```
> ['Mon', 'Wed', 'Tue', 'Wed', 'Thu', 'Fri']
```

Explicación:

El método `splice()` agrega nuevos elementos o elimina elementos existentes de un arreglo. Puede recibir 3 parámetros: 
1. El **índice** a partir del cuál se empieza a modificar el contenido del arreglo **(obligatorio)**
2. El **número** de elementos a eliminar a partir del índice dado.
3. **Uno o más elementos separados por comas** que serán insertados en el arreglo desde el índice dado.

En este caso, se agrega el elemento 'Wed' en el índice 1 y no se eliminan elementos.
`splice()` modifica el arreglo original.

### 7. entries()

¿Cuál es el resultado del siguiente código?

```
const fastFood = ['🌭', '🍔', '🍟', '🍕'];
const iterator = fastFood.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);
```

Resultado:

```
> [0, '🌭']
> [1, '🍔']
```

Explicación:

`entries()` es un método que retorna un objeto iterador que consiste en pares `[key, value]`. Con `iterator.next()`, se obtiene el siguiente par (array) con el índice y valor en el arreglo. Este método no modifica el arreglo original.

### 8. map()

¿Cuál es el resultado del siguiente código?

```
const numbers = [32, 45, 86, 99];
const multiplication = numbers.map(n => n * 3);

console.log(multiplication);
```

Resultado:

```
> [96, 135, 258, 297]
```

Explicación:

El método `map()` retorna un nuevo arreglo con el resultado de aplicar una función (callback) a cada uno de los elementos del arreglo original. `map()` no modifica el arreglo original. En este caso, cada elemento del arreglo es multiplicado por 3 y agregado al nuevo arreglo.

### 9. reverse()

¿Cuál es el resultado del siguiente código?

```
const weather = ['🌤', '🌧'];
const reversed = weather.reverse();

console.log(reversed);
console.log(weather);
```

Resultado:

```
> ['🌧', '🌤']
> ['🌧', '🌤']
```

Explicación:

El método `reverse()` retorna el arreglo con el orden invertido. Este método modifica el arreglo original, por lo que `weather` y `reversed` tienen los mismos elementos.

### 10. join()

¿Cuál es el resultado del siguiente código?

```
const phrase = ['Nunca', 'Pares', 'De', 'Aprender'];

console.log(phrase.join());
console.log(phrase.join(''));
console.log(phrase.join('-'));
```

Resultado:

```
> "Nunca,Pares,De,Aprender"
> "NuncaParesDeAprender"
> "Nunca-Pares-De-Aprender"
```

Explicación:
El médoto `join()` concatena los elementos de un arreglo separados con el separador que se le mande como parámetro y retorna dicho string. Si no recibe algún parámetro, los elementos serán separados mediante comas (,). Si se quiere unir los elementos sin espacios o caracteres, el separador debe ser un string vacío ('').

### 11. find()

¿Cuál es el resultado del siguiente código?

```
const primeNumbers = [199, 211, 223, 227, 229, 233];
const found = primeNumbers.find(number => number < 200);

console.log(found);
```

Resultado:

```
> 199
```

Explicación:

El método `find()` retorna el valor de la primera ocurrencia del elemento que cumple una condición dada. Si no lo encuentra, el valor de retorno es `undefined`. En este caso, el primer número que sea menor a 200 es 199.

### 12. fill()

¿Cuál es el resultado del siguiente código?

```
const pairNumbers = [2, 10, 14, 98];

console.log(pairNumbers.fill(0, 2, 4));
console.log(pairNumbers.fill(34, 1));
console.log(pairNumbers.fill(6));
```

Resultado:

```
> [2, 10, 0, 0]
> [2, 34, 34, 34]
> [6, 6, 6, 6]
```

Explicación:

El método `fill()` modifica los elementos del arreglo con un solo valor y retorna ese nuevo arreglo modificado. Puede recibir tres parámetros: el **valor**, el **índice inicial** (opcional) a partir del cuál se llena el arreglo con el valor dado y el **índice final** (opcional) hasta donde se llena el arreglo. Cuando no se tienen el índice inicial, el valor por defecto es 0 y si no está definido el índice final, el valor por defecto es el tamaño del arreglo.

### 13. reduce()

¿Cuál es el resultado del siguiente código?

```
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})
```

Resultado:

```
> 10
```

Explicación:

El método `reduce()` ejecuta una función para cada elemento del arreglo y lo reduce a un sólo valor. Cuando se ejecuta la función en un elemento del arreglo (`current`), el valor que se retorna se asigna a `accumulator`, el cual es recordado en la siguiente iteración. El último valor de `accumulator` es el que se retorna. En el código:

```
1era iteración -> 1
2da  iteración -> 3
3era iteración -> 6
4ta  iteración -> 10

``` 

## 🧼 Pasos a seguir:

1. Hacer un "Fork" de este proyecto.
2. Revolver los retos propuestos.
3. Crear un Pull Request hacia este repositorio.

## 🧼 ¿Cómo contribuir?

Si quieres agregar o mejorar algo, te invito a colaborar directamente en este repositorio: [challenge-javascript-19](https://github.com/platzimaster/challenge-javascript-19/)

## 🧼 Licencia

challenge-javascript-19 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
