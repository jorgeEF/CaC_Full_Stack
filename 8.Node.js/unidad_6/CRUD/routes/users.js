var express = require('express');
var router = express.Router();

// importa el modulo mysql y configura la base de datos
var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'crud_express'
});
// se conecta a la base de datos
connection.connect();
  
// ruta raiz de users, muestra todos los usuarios.
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM users', function(err, results, fields) {
        if (err) throw err;  
        //res.send(results);
        res.render('users', { title: 'Usuarios', users: results});
  });    
});

// ruta usuario por id, muestra solo el usuario del id.
router.get('/:id', function(req, res, next) {    
  connection.query('SELECT * FROM users WHERE id = ' + req.params.id, function(err, results, fields) {
        if (err) throw err;          
        res.send(results);
  });
});

// cierra la conexion a la base de datos, SE ROMPE
//connection.end();

module.exports = router;
