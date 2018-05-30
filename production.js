const config = require('./config');
const showIt = require('./decrypt');

var host = showIt(process.env.HOST);
var user = showIt(process.env.USER);
var password = showIt(process.env.PASSWORD);
var database = showIt(process.env.DATABASE);

module.exports = {
    HOST: host,
    USER: user,
    PASSWORD: password,
    DATABASE: database
};