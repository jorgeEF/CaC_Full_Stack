// npm install colors

// importamos el módulo
var colors = require('colors');

// usamos el modulo
console.log('Hola módulo colors, este texto es verde'.green);
console.log('Este texto es invertido'.inverse);

/*
Los modulos externos se ignoran en en git para reducir peso en repositorio.
Las dependencias se pueden instalar en el entorno donde se utilizen ejecutando:
npm install
*/