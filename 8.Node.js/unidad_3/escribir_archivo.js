// importamos modulo write file
const fs = require('node:fs');

// configuramos nombre de archivos, su contenido y mostramos en consola un mensaje
fs.writeFile('archivo_prueba.txt', 'Hola modulo write file!', function (err) {
    if (err) throw err;
    console.log('Archivo Creado!');
})