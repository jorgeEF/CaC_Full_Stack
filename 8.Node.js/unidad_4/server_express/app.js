// npm install express --save

const express = require('express');
const app = express();
const PORT = 3000;

// set define una variable global disponible en toda la aplicación
app.set("nombre", "Jorge");

// middleware: se ejecuta ante cualquier petición y de ahi ejecuta el next
app.use((req, res, next)=> {
	console.log('estamos en el middleware')
	next();
});

// ruta raiz /
app.get('/', (req,res) => {
	res.send('Hola, esta es la ruta raiz')
})

// ruta consultas usando variable global "nombre"
app.get('/consultas', (req,res) => {
	res.send('Estás en consultas ' + app.get("nombre"));
})

// ruta respuesta con json (api)
app.post('/api', (req,res) => {
	res.json([{"id": 1, "nombre": "Peine", "descripcion": "peine francés"}]);
})

app.listen(PORT, () => console.log(`Servidor corriendo desde: http://localhost:${PORT}`));

// npm install nodemon
// npx nodemon: ejecuta la app y la auto reinicia cuando hacemos cambios