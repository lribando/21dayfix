var express = require('express');
var $ = require('jquery');
var app = express();
var hbs = require('hbs');

var port = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(port);