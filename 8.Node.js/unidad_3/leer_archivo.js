// importamos modulo read file
const fs = require('node:fs');

// indicamos archivo a leer y mostramos su contenido en consola
fs.readFile('archivo_prueba.txt', (err, data) => {
    if (err) throw err;
    console.log(data + " ");
});