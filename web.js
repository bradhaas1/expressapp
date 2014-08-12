require('./app/init');
var server = require('./app/server');

module.exports = server.start(process.env.NODE_ENV);