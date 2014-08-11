var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
app.use(express.static(__dirname + '/css'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/mps-sidebarflexone-ads', function (req, res) {
  res.render('iframes');
});

app.listen(3000);