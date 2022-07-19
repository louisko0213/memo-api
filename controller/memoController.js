const db = require('../db/db');

const getMemoData = (req, res) => {
    db.query('SELECT * FROM memoTable ORDER BY time desc',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
}

const getMemoDataById = (req, res) => {
    const id = req.params.id;

    db.query(
        'SELECT * FROM memoTable WHERE id = ?',
        id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
}

const createMemo = (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const date = req.body.date;
    const password = req.body.password;

    db.query(
        'INSERT INTO memoTable (title, content, time, password) VALUES (?,?,?,?)',
        [title, content, date, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('created');
            }
        }
    )
}

const updateMemo = (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const date = req.body.date;
    const password = req.body.password;

    db.query(
        `UPDATE memoTable SET title = ?, content = ?, time = ?, password = ? WHERE id = ${id}`,
        [title, content, date, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('updated');
            }
        }
    )
}

const deleteMemo = (req, res) => {
    const id = req.params.id;

    db.query(
        'DELETE FROM memoTable WHERE id = ?',
        id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('deleted');
            }
        }
    )
}

const checkMemoPassword = (req, res) => {
    const id = req.params.id;
    const password = req.query.password;

    db.query(
        `SELECT password FROM memoTable WHERE id = ${id}`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                result[0].password === password ? res.send('pass') : res.send('reject');
            }
        }
    )
}


module.exports = {
    getMemoData,
    getMemoDataById,
    createMemo,
    updateMemo,
    deleteMemo,
    checkMemoPassword
}