// Buscar modulos en nodejs.org o npm

// importamos modulo externo "os"
const os = require('node:os');

// asignamos los metodos freemem y totalmen a os
const {freemem, totalmem} = os

console.log("La memoria libre actual de esta pc es " + freemem() + " del total de " + totalmem());