var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
var routes = require('../../routes');

app.use(express.static('css'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', routes.indexRoute);
app.get('/mps-sidebarflexone-ads', routes.iframes);

app.listen(3000);