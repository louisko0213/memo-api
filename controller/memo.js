const db = require('../db/db');

const getMemoDataByUser = async (req, res) => {
    const user = req.query.user;

    db.query(`SELECT * FROM memo WHERE user_account = '${user}'  ORDER BY date desc`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
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
}

const createMemo = (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const date = req.body.date;
    const password = req.body.password;
    const user = req.body.user;

    db.query(
        'INSERT INTO memo (title, content, date, password, user_account, status) VALUES (?,?,?,?,?,?)',
        [title, content, date, password, user, 0],
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
        `UPDATE memo SET title = ?, content = ?, date = ?, password = ? WHERE id = ${id}`,
        [title, content, date, password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('updated');
            }
        }
    )
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
}

const checkMemoPassword = async (req, res) => {
    const id = req.params.id;
    const password = req.query.password;

    await db.query(
        `SELECT password FROM memo WHERE id = ${id}`,
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
    getMemoDataByUser,
    getMemoDataById,
    createMemo,
    updateMemo,
    deleteMemo,
    checkMemoPassword
}