const mysql = require('mysql2');
//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost', 
        user: 'root',
        password: 'password',
        database: 'employee'
    },
    console.log('Successfully connected to emplooyee database.')
); 

module.exports = db;