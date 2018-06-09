var app = require('./app');
var request = require('supertest');
var chai = require('chai').expect;

describe('contracts', function () {

    it('should get all contracts, Rodney', function () {
        request(app)
            .get('/Contracts')
            .set('Accept', 'application/json')
            .end(function (err, res) {
                console.log(JSON.parse(res.text)[0].FirstName);
                chai(res.body).to.be.an('array');
                chai(res.status).equals(200);
            });
    });

});