var express = require('express');
var router = express.Router();
let connection = require("./../bbdd");


/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Personas' });
//   res.send("Ingresaste al Backend por get en la gestion de personas");  
  // res.json([{"id": 1, "nombre": "Pedro", "apellido": "Fernandez"},
  //           {"id": 2, "nombre": "Paula", "apellido": "Zambrano"}
  //           ])

      connection.query('SELECT * from personas', function (error, results, fields) {
        if (error) throw error;
          // console.log('The solution is: ', results);
          res.json(results);
      });
      
      // connection.end();

      // res.end();
});


router.get('/:id', function(req, res, next) {
 
  
        let sentencia = 'SELECT * from personas where id = ' + req.params.id;

        connection.query(sentencia, function (error, results, fields) {
          if (error) throw error;
            res.json(results);
        });
        
        // connection.end();
  
  });
  

router.post('/', function(req, res, next) {

        let sentencia = `insert into personas (nombre, apellido) values("${req.body.nombre}", "${req.body.apellido}") `;

        console.log(sentencia);

        connection.query(sentencia, function (error, results, fields) {
          if (error) throw error;
            res.json(results);
        });

        
    });
    

router.put('/:id', function(req, res, next) {

        let sentencia = `update personas set nombre = "${req.body.nombre}", apellido = "${req.body.apellido}" where id = ${req.params.id}`;

        console.log(sentencia);

        connection.query(sentencia, function (error, results, fields) {
          if (error) throw error;
            res.json(results);
        });

        
    });
    

router.delete('/:id', function(req, res, next) {

      let sentencia = `delete from personas where id = ${req.params.id}`;

      console.log(sentencia);

      connection.query(sentencia, function (error, results, fields) {
        if (error) throw error;
          res.json(results);
      });

      
  });






module.exports = router;
