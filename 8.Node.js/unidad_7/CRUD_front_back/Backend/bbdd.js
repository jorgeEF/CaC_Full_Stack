var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database : 'base22573',
    port: 3306
  });
  
  connection.connect();

  module.exports = connection;