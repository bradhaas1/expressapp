var path = require('path');
var express = require('express');
var exphbs  = require('express-handlebars');
var compass = require('compass');
var path = require('path');

function configureForDevelopment(app){
  app.use(express.static('./public'));

  app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
  }));
  app.set('view engine', '.hbs');

  app.use(compass());
  compass({
    css: path.join(__dirname, 'styles/css'),
    sass: path.join(__dirname, 'styles/sass')

  });
  // app.use('/', express.static(path.join(__dirname, 'public')));

}

var configurations = {
  development: configureForDevelopment
 }

exports.for = function getConfigurationFor(environment, app){
  var configure = configurations[environment];
  configure(app);
}