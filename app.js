var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

//Create a static file server
app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

function handler (req, res) {
	fs.readFile(__dirname + '/public/index.html', function (err, data) {
		if (err) {
			res.writeHead(500);
			res.end('Error loading index.html');
		} else {
			res.writeHead(200);
			res.end(data);
		}
	});
}

io.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});

//Get the dummy data
require('./server/ddata.js');

var port = 8080;
app.listen(port);
console.log('Express server started on port %s', port);
