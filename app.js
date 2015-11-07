var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	console.log('user connected');
	socket.on('ding', function (data) {
		console.log('dong');
	});
	socket.emit('message', { hello: 'world' });
});

//Get the dummy data
require('./server/ddata.js');

var port = 8080;
http.listen(port);
console.log('Express server started on port %s', port);
