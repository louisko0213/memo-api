const mysql = require('mysql');

const mysql_config = {
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bcf2bf5a93ec0c',
    password: 'ca9e28e4',
    database: 'heroku_5e85143b3285cab'
};

const db = mysql.createConnection(mysql_config);

// const disconnect_handler = () => {
//     const conn = mysql.createConnection(mysql_config);
//     conn.connect(err => {
//         (err) && setTimeout('disconnect_handler', 2000);
//     });

//     conn.on('error', err => {
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//             disconnect_handler();
//         } else {
//             throw err;
//         }
//     });
//     exports.conn = conn;
// };

module.exports = db;