pulse.ready(function(){

  // The base engine object
  var engine = new pulse.Engine({
    gameWindow: 'gw',
    size: {width: 800, height: 600}
  });

  //Create and Add a scene
  var scene = new pulse.Scene();
  engine.scenes.addScene(scene);

  //Create and add a layer
  var layer = new pulse.Layer();
  layer.anchor = {x: 0, y: 0};
  layer.position = {x: 0, y: 0};
  scene.addLayer(layer);

  //Create and add a background sprite
  var bg = new pulse.Sprite({
    src: 'img/bg.jpg'
  });
  bg.position = {x: 400, y: 300};
  layer.addNode(bg);

  //Create a sprite, using a spritesheet
  //for its image
  var dinos = [];
  for (var i = 0; i < 6; i++) {
    dinos.push(createDino(layer, i));
  }

  //Create a label for our text
  var label = new pulse.CanvasLabel({
    text: '', fontSize: 40
  });
  label.position = {x: 400, y: 300};
  layer.addNode(label);

  var loop = function(manager) {
    //Move the dino
    dinos.forEach(function (dino) {
      dino.move(dino.velocity, 0);

      //Wrap the dino when when runs off-screen
      if(dino.velocity > 0 && dino.position.x >= 950) {
        dino.position.x = -125;
      } else if(dino.velocity < 0 && dino.position.x < -125) {
        dino.position.x = 950;
      }
    });
  };

  engine.scenes.activateScene(scene);
  engine.go(20, loop);
});

function createDino(layer, index) {
  var dino = new pulse.Sprite({
    src: 'img/dino.png',
    size: {width: 180, height: 89}
  });
  layer.addNode(dino);
  //Create and animation to animate our sprite
  dino.velocity = (Math.random() * 4 + 2) * (Math.random() > 0.5 ? 1 : -1);
  dino.position = {
    x: dino.velocity > 0 ? -125 * Math.random() * 3 : 950 * Math.random() * 3,
    y: 420 + index * 4
  };

  var animationSettings = {
    name : 'Walking',
    size : {width: 250, height: 124},
    bounds : {x: 250, y: 124},
    frames : [0,1,2,3,4,5,6,7],
    frameRate : 8
  };
  if (dino.velocity < 0) {
    animationSettings.frames.reverse();
  }
  var animation = new pulse.AnimateAction(animationSettings);

  dino.addAction(animation);
  animation.start();
  return dino;
}
