const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bcf2bf5a93ec0c',
    password: 'ca9e28e4',
    database: 'heroku_5e85143b3285cab'
});

module.exports = db;