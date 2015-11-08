var consoleFont = 'Inconsolata';
// Web Font Loader config
window.WebFontConfig = {
	active: function () {
		createText();
	},
	google: {
		families: [consoleFont]
	}
};

var gameConfig = {
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight,
	renderer: Phaser.AUTO,
	parent: 'gw',
	resolution: window.devicePixelRatio,
	state: {
		preload: preload,
		create:  create,
		update:  update,
		render:  render,
	}
}

var game = new Phaser.Game(gameConfig);

function preload() {
	// Web Font Loader - https://github.com/typekit/webfontloader
	game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
}

var consoleText;

function create() {
  game.stage.setBackgroundColor(0x222222);
}

function update() {

}

function render() {

}

function log(message) {
	consoleText.text += "\n" + message;
}

function initSocket() {
	var socket = new io();
	socket.on('connected', function () { log("socket connected"); });
	socket.on('message', function (data) {
		log('received: ' + JSON.stringify(data));
	});
	socket.on('close', function () {
		log('closed');
	});
	socket.on('error', function () {
		log('error');
	});
}

function createText() {
  // console
  consoleText = game.add.text(20, 20, "Koppervik", {
  	font: consoleFont,
  	fontSize: 14,
  	wordWrap: true,
  	wordWrapWidth: 500,
  	fill: 'white',
  });
  // TODO: File bug with Phaser for silently this in init object
  consoleText.lineSpacing = -6;

  initSocket();
}