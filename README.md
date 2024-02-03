## SQLite を使用した Express のハンズオン

### 使用方法

-   以下のコマンドを実行し、テーブルを作成
    ```
    node db.js
    ```
-   サーバの起動
    ```
    node app.js
    ```
-   リクエスト例

    ```
    # GET
    curl -X GET localhost:3000/users

    # POST
    curl -X POST -H "Content-Type: application/json" -d '{"name":"Tom", "email":"test@test.j@"}' localhost:3000/users

    # DELETE
    curl -X DELETE localhost:3000/users/1
    ```

<br/>

### 参考記事

-   [Express 公式サイト](https://expressjs.com/)
-   [Express チュートリアル](https://expressjs.com/ja/guide/routing.html)
-   [REST API チュートリアル](https://restfulapi.net/)
