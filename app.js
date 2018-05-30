const express = require('express');
const app = express();

app.use(express.static('client'));
const config = require('./config')

var mysql = require('mysql');

var con = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE
});

function GetConsumers(req, res) {
    return new Promise(function (resolve, reject) {
        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT * FROM " + config.DATABASE + ".consumers", function (err, result, fields) {
                if (err) throw err;
                //console.log(result);
                resolve(result);
            });
        });
    }).then(rows => res.send(rows));
}

app.get('/consumers', GetConsumers);

module.exports = app;