var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Buenos Aires' });
  // res.send("Ingresaste al Backend por get");  
  // res.json([{"id": 1, "nombre": "Pedro", "apellido": "Fernandez"},
  //           {"id": 2, "nombre": "Paula", "apellido": "Zambrano"}
  //           ])

});

module.exports = router;
