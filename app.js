const express = require('express');
const app = express();

app.use(express.static('client'));
var GetContracts = require('./contractsService');

app.get('/contracts', async (req, res) => {
    var results = await GetContracts.get();
    console.log(results);
    res.send(results);
});

module.exports = app;