var express = require('express');
var app = express();
var server = require('http').Server(app);
var engine = require('engine.io');
var io = engine.attach(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	socket.emit('event1', { hello: 'world' });
	socket.on('event2', function (data) {
		console.log(data);
	});
});

//Get the dummy data
require('./server/ddata.js');

var port = 8080;
app.listen(port);
console.log('Express server started on port %s', port);
