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


module.exports = {
    getAllUsers: () => {        
        connection.query('SELECT * FROM users', function(err, results, fields) {
            if (err) throw err;   
            return results;           
        });                
    },
    getFilteredUser: (filtro) => {
        connection.query('SELECT * FROM users WHERE id = ' + filtro, function(err, result, fields) {
            if (err) throw err;
            return result;
        });
    }
}