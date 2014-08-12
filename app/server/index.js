var express = require('express');
var routes = require('./routes');
var configureApp  = require('./configureApp');
var app = express();

function createApplication(environment){
  app.get('/', routes.indexRoute);
  app.get('/mps-sidebarflexone-adpreview', routes.iframes);

  configureApp.for(environment, app);
  app.listen(process.env.PORT);
  return app;
}

module.exports.start = createApplication;
