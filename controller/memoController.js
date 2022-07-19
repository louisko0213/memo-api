const db = require('../db/db');

const getMemoData = (req, res) => {
    db.query('SELECT * FROM memo ORDER BY date desc',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
    db.end();
}

const getMemoDataById = (req, res) => {
    const id = req.params.id;

    db.query(
        'SELECT * FROM memo WHERE id = ?',
        id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
    db.end();
}

const createMemo = (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const date = req.body.date;
    const password = req.body.password;

    db.query(
        'INSERT INTO memo (title, content, date, password) VALUES (?,?,?,?)',
        [title, content, date, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('created');
            }
        }
    )
    db.end();
}

const updateMemo = (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const date = req.body.date;
    const password = req.body.password;

    db.query(
        `UPDATE memo SET title = ?, content = ?, date = ?, password = ? WHERE id = ${id}`,
        [title, content, date, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('updated');
            }
        }
    )
    db.end();
}

const deleteMemo = (req, res) => {
    const id = req.params.id;

    db.query(
        'DELETE FROM memo WHERE id = ?',
        id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('deleted');
            }
        }
    )
    db.end();
}

const checkMemoPassword = (req, res) => {
    const id = req.params.id;
    const password = req.query.password;

    db.query(
        `SELECT password FROM memo WHERE id = ${id}`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                result[0].password === password ? res.send('pass') : res.send('reject');
            }
        }
    )
    db.end();
}


module.exports = {
    getMemoData,
    getMemoDataById,
    createMemo,
    updateMemo,
    deleteMemo,
    checkMemoPassword
}