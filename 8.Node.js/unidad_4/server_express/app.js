// npm install express --save

const express = require('express');
const app = express();
const PORT = 3000;
// ruta raiz /
app.get('/', (req,res) => {
	res.send('hola')
})

// ruta consultas
app.get('/consultas', (req,res) => {
	res.send('Estas en consultas')
})

app.listen(PORT, () => console.log('Servidor corriendo desde: http://localhost:${PORT}'));