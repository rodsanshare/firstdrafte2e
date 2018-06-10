
var mysql = require('mysql');
const config = require('./config')

var con = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE
});


exports.get = function () {
    return new Promise((resolve, reject) => {
        con.connect(function (err) {
            if (err) {
                reject(new Error('Error by Rodney'))
            };
            con.query("SELECT * FROM " + config.DATABASE + ".Contracts", function (err, result, fields) {
                if (err) {
                    reject(new Error('Error by Rodney'));
                } else
                    resolve(result);
            });
            con.end();
        });
    });
}