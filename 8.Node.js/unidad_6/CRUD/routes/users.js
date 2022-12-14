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
router.get('/', function(req = null, res, next) {
  let filtro = req.query.id;
  
  if (filtro == null || filtro == ''){
    connection.query('SELECT * FROM users', function(err, results, fields) {
      if (err) throw err;      
      res.render('users', { title: 'Usuarios', users: results});
    });
  }
  else {
    connection.query('SELECT * FROM users WHERE id = ' + filtro, function(err, results, fields) {
      if (err) throw err;
      res.render('users', { title: 'Usuarios', users: results});
    });
  }      
});

module.exports = router;
