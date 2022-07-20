const mysql = require('mysql');

const mysql_config = {
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bcf2bf5a93ec0c',
    password: 'ca9e28e4',
    database: 'heroku_5e85143b3285cab'
};

const db = mysql.createConnection(mysql_config);

db.connect(error => {
    if (error) console.log('db error', error);
    console.log('Successfully connect to database!');
});

setInterval(() => {
    db.query('SELECT 1');
    console.log('Database is ok!');
}, 5000);

module.exports = db;