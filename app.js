const express = require('express');
const app = express();
const decryptIt = require('./decrypt');

app.use(express.static('client'));
require('dotenv/config');
//console.log(decryptIt('ZJvz9I94eb00B3qbrCF5yw=='));
//touch
// console.log('host: '+decryptIt(process.env.HOST));
// console.log('user: '+decryptIt(process.env.USER));
// console.log('pass: '+decryptIt(process.env.PASSWORD));
// console.log('db: '+decryptIt(process.env.DATABASE));


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
            if (err) throw err

            console.log('3');
            console.log(process.env.USER)


            console.log(rows);
            connection.end();
            return resolve(rows);
        });
    });

};

app.get('/consumers', (req, res) => dbContext3().then(rows => res.send(rows)));

app.listen(3000, () => console.log('Example app listening on port 3000!'))