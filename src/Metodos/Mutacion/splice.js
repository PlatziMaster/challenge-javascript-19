//el metodo splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

//donde 1 es el el indice donde se comenzarà a cambiar el array

//donde 0 un entero indicando el numero de elementos a eliminar del array

//si el valor es 0, no se eliminará ningun elemento en este caso se debe especificar al menos un nuevo elemento.

//por ultimo si no se especifica ningun elemento, splice() solamente eliminara elementos del array

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

days.splice(1, 0, 'Wed');

console.log(days);
