
var mysql = require('mysql');
const config = require('./config')

var con = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE
});


exports.get = function (req, res) {
    con.connect(function (err) {
        if (err) {
            res.send(err)
        };
        con.query("SELECT * FROM " + config.DATABASE + ".Contracts", function (err, result, fields) {
            if (err) {
                res.send(err)
            };
            //console.log(result);
            res.send(result)
        });
    });
}