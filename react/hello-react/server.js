var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public/build'));

app.get('/', function (request, response) {
	response.sendFile('./public/build/template.html', {root: __dirname});
});

var server = app.listen(5000, function() {
	console.log('Server started at port ' + server.address().port);
});