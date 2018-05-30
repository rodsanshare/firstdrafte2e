var _ = require('lodash');
require('dotenv/config');

//Base config
config = {
    dev: 'development',
    prod: 'production',

    HOST: '0.0.0.0',
    USER: 'user',
    PASSWORD: 'password',
    DATABASE: 'database'
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

config.env = process.env.NODE_ENV;

console.log(config.env);

var envConfig = require('./' + config.env);

module.exports = _.merge(config, envConfig || {});
//module.exports = config;