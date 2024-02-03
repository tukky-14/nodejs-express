// 必要なモジュールの読み込み
const express = require('express');
const app = express();

// データの保存場所 (ダミーデータ)
const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
];

// GET /users エンドポイント
app.get('/users', (req, res) => {
    // 全ユーザーデータを取得
    res.json(users);
});

// GET /users/:id エンドポイント
app.get('/users/:id', (req, res) => {
    // パラメータからユーザーIDを取得
    const id = parseInt(req.params.id);

    // ユーザーIDに一致するユーザーデータを取得
    const user = users.find((user) => user.id === id);

    // ユーザーデータが存在する場合
    if (user) {
        res.json(user);
    } else {
        // ユーザーデータが存在しない場合
        res.status(404).send('User not found.');
    }
});

// サーバーの起動
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// リクエスト例
// GET /users
// curl http://localhost:3000/users
// [{"id":1,"name":"John Doe"},{"id":2,"name":"Jane Doe"}]

// GET /users/1
// curl http://localhost:3000/users/1
// {"id":1,"name":"John Doe"}
