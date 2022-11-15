// npm install express --save

const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req,res) => {
	res.send('hola')
})
app.listen(PORT, () => console.log('Servidor corriendo desde: http://localhost:${PORT}'));