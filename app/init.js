var configurationDefaults = {
  NODE_ENV: 'development',
  REDIS_ENDPOINT: '',
  REDIS_KEY_PREFIX: '',
  PORT: 9001
};

for (var value in configurationDefaults) {
  process.env[value] = process.env[value] || configurationDefaults[value];
}

var colors = require('colors');
if (process.env.NODE_ENV !== 'development') {
  colors.mode = 'none';
}

var log    = require('./server/log');
log.info('Default values for environment');

for (var value in configurationDefaults) {
  log.info(' ' + value.green + ' = ' + process.env[value]);
}