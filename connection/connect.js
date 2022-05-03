var sql = require("mysql");

var connection = sql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'tecate01',
    database: 'fortaweb',
    multipleStatements: true
  });
  
  
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  }); 

module.exports = connection;
