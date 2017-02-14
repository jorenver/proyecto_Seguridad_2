var express = require('express');
var http = require('http');
var path = require('path');
var swig = require('swig');
var bodyParser = require('body-parser');

app = express();

app.set('port', 7575);

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');



app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());


http.createServer(app).listen(app.get('port'), function(){
	console.log("Expres escuchando en el puerto" + app.get('port'));
});

require('./router')(app);

