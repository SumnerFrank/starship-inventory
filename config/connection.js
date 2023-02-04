const mysql = require('mysql2');
//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost', 
        user: 'user',
        password: 'password',
        database: ''
    },
    console.log('Successfully connected to ____ database.')
); 

module.exports = db;