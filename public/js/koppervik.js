var socket = new io();
socket.on('message', function (data) {
	console.log(JSON.stringify(data));
	console.log('ding');
	socket.emit('ding');
});
socket.on('close', function () {
	console.log('closed');
});