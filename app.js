const express = require('express');
const app = express();
app.use(express.json());

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite3');

// GET /users エンドポイント
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            res.status(500).send('An error occurred.');
            return;
        }

        res.json(rows);
    });
});

// POST /users エンドポイント
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err) => {
        if (err) {
            console.log('Error:', err);
            res.status(500).send('An error occurred.');
            return;
        }

        res.status(201).send('User created successfully.');
    });
});

// DELETE /users エンドポイント
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    db.run('DELETE FROM users WHERE id = ?', id, (err) => {
        if (err) {
            res.status(500).send('An error occurred.');
            return;
        }

        res.status(200).send('User deleted successfully.');
    });
});

// サーバーの起動
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
