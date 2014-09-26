var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public/build'));
app.use(require('connect-livereload')());

app.all('/api/comments', function (request, response) {
	response.sendFile('./public/build/scripts/comments.json', {root: __dirname});
});

app.get('/', function (request, response) {
	response.sendFile('./public/build/template.html', {root: __dirname});
});

var server = app.listen(5000, function() {
	console.log('Server started at port ' + server.address().port);
});