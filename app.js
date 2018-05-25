const express = require('express');
const app = express();
const decryptIt = require('./decrypt');

app.use(express.static('client'));
require('dotenv/config');

var dbContext3 = function () {
    var mysql = require('mysql');
    var consumers = '';
    var connection = mysql.createConnection({
        host: decryptIt(process.env.HOST),
        user: decryptIt(process.env.USER),
        password: decryptIt(process.env.PASSWORD),
        database: decryptIt(process.env.DATABASE)
    });

    connection.connect()

    return new Promise(function (resolve, reject) {
        connection.query('SELECT * FROM fieDb.consumers', function (err, rows, fields) {
            if (err) throw err;

            connection.end();
            return resolve(rows);
        });
    });

};

app.get('/consumers', (req, res) => dbContext3().then(rows => res.send(rows)));

app.listen(3000, () => console.log('Example app listening on port 3000!'))