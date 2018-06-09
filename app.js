const express = require('express');
const app = express();

app.use(express.static('client'));
var GetContracts = require('./contractsService');

app.get('/contracts', GetContracts.get);

module.exports = app;