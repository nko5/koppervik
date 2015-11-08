var socket = new io();
socket.on('message', function (data) {
	console.log(JSON.stringify(data));
	console.log('ding');
	socket.emit('ding');
});
socket.on('close', function () {
	console.log('closed');
});

var game = new Phaser.Game(document.documentElement.clientWidth, document.documentElement.clientHeight, Phaser.AUTO, 'gw', {
	preload: preload,
	create:  create,
	update:  update,
	render:  render,
});

function preload() {

}

var consoleText;

function create() {
  // console
  consoleText = game.add.text(20, 20, "Console", {
  	font: 'Courier New',
  	fontSize: 14,
  	wordWrap: true,
  	wordWrapWidth: 500,
  	fill: 'white'
  });
}

function update() {

}

function render() {

}
