var socket = new io();
socket.on('message', function (data) {
	console.log(JSON.stringify(data));
	console.log('ding');
	socket.emit('ding');
});
socket.on('close', function () {
	console.log('closed');
});

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gw', {
	preload: preload,
	create:  create,
	update:  update,
	render:  render,
});

function preload() {

}

function create() {

}

function update() {

}

function render() {

}

