var app = require('./app');
var request = require('supertest');
var chai = require('chai').expect;

describe('consumers', function () {

    it('should get all consumers, Rodney', function (done) {
        request(app)
            .get('/consumers')
            .set('Accept', 'application/json')
            .end(function (err, res) {
                console.log(JSON.parse(res.text)[0].FirstName);
                chai(res.body).to.be.an('array');
                chai(res.status).equals(200);
                done();
            });
    });

});