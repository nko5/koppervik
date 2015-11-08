var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	console.log('user connected');
	socket.emit('connected', {
		message: 'Welcome. This node server is humbled by your presence.\nOut of the entire Internet, you have come here.\nTake a break before your judging marathon continues. :)'
	});
	socket.broadcast.emit('new-user', {
		message: 'Another user has arrived. Do you sense their presence?'
	});
	socket.on('disconnect', function () {
		socket.broadcast.emit('user-gone', {
			message: 'A user has disappeared back into the Internet.'
		});
	});
});

var port = 8080;
http.listen(port);
console.log('Express server started on port %s', port);
