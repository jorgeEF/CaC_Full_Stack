// tipo de datos compuestos

// Arreglos

const nombres = ["Juan", "Pedro", "Silvia", "Ana", "Maria"];
console.log("Mostrando arreglo nombres:\n", nombres);

const numeros = [];

// .push agrega elemento al final del arreglo
nombres.push("Laila");
console.log("Mostrando arreglo nombres con .push(Laila):\n", nombres);

// .pop quita el ultimo elemento del arreglo
let ultimoElemento = nombres.pop();
console.log("Mostrando arreglo nombres despues de .pop():\n", nombres);
console.log("Mostrando el ultimo elemento quitado:\n", ultimoElemento);

// .unshift agrega elemento al comienzo del arreglo
nombres.unshift("Jorge");
console.log("Mostrando arreglo nombres con .unshift(Jorge):\n", nombres);

// .shift quita el elemento al comienzo del arreglo
let primerElemento = nombres.shift();
console.log("Mostrando arreglo nombres con .shift():\n", nombres);
console.log("Mostrando el primer elemento quitado:\n", primerElemento);

// mostrar indice de elemento arreglo.indexOf(elemento)
console.log("Mostrando indice de Silvia:\n",nombres.indexOf("Silvia"));

// obtener/quitar elemento/s de cierto indice
console.log("quitando elemento del indice: ", nombres.indexOf("Silvia"));
elementoIndice = nombres.splice(nombres.indexOf("Silvia"), 1);
console.log("Mostrando el elemento quitado:\n", elementoIndice);
console.log("El arreglo quedó:\n", nombres);