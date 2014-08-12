require('colors');

function wrap(write, level){
  return function logMessage(message, color){
    write('[%s] [%s] %s', new Date().toISOString().grey, level, message[color || 'white'] );
  };
}

module.exports.verbose = wrap(console.log, 'VERBOSE'.grey);
module.exports.info = wrap(console.info, 'INFO'.grey);
module.exports.warn = wrap(console.log, 'WARN'.yellow);
module.exports.error = wrap(console.error, 'INFO'.red);


