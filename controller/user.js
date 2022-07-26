const db = require('../db/db');

const signup = (req, res) => {
    const account = req.body.account;
    const password = req.body.password;
    const username = req.body.username;

    db.query(
        'INSERT INTO user (user_account, user_password, user_name) VALUES (?,?,?)',
        [account, password, username],
        (err, result) => {
            if (err) {
                console.log(err);
                if (err.code === 'ER_DUP_ENTRY') res.send('fail');
            } else {
                res.send('ok');
            }
        });
}

const login = (req, res) => {
    const account = req.query.account;
    const password = req.query.password;

    db.query(`SELECT user_password FROM user WHERE user_account = '${account}'`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                result[0].user_password === password ? res.send('pass') : res.send('reject');
            }
        })
}

module.exports = {
    signup,
    login
}