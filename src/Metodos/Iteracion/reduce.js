//el metodo reduce() ejecuta una funcion reductora sobre cada elemento de una rray devolviendo como resultado un unico valor

//el valor devuelto de la funcion reductora se asigna al acumulador, cuyo valor se recuerda en cada iteracion del array, y el ultima instancia, se convierte en el valor final, unico y resultante

[0, 1, 2, 3, 4].reduce(function (acc, cur) {
  return acc + cur;
});
//10
