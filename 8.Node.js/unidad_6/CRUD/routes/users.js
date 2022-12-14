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

router.get('/create', function(req, res, next) { 
    res.render('create', {title: 'Crear nuevo usuario'});
});

router.post('/create', function(req, res, next) { 
  connection.query(`INSERT INTO users (nombre,apellido) VALUES('${req.body.nombre}','${req.body.apellido}');`, function(err, results, fields) {
    if (err) throw err;
    res.redirect('/users');
  });
});

router.get('/edit/:id', function(req, res, next) {  
    connection.query('SELECT * FROM users WHERE id = ' + req.params.id, function(err, results, fields) {
      if (err) throw err;      
      res.render('users', { title: 'Usuarios', users: results});
    });
});

router.post('/delete/:id', function(req, res, next) {  
  connection.query('DELETE FROM users WHERE id = ' + req.params.id, function(err, results, fields) {
    if (err) throw err;
    res.redirect('/users');
  });
});

module.exports = router;
