var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var pin1 = createSprite(200, 300,20,20);
pin1.shapeColor="darkgray";

var pin2 = createSprite(180,320,20,20);
pin2.shapeColor="darkgray";

var pin3 = createSprite(220,320,20,20);
pin3.shapeColor="darkgray";

var pin4 = createSprite(160,340,20,20);
pin4.shapeColor="darkgray";

var pin5 = createSprite(200,340,20,20);
pin5.shapeColor="darkgray";

var pin6 = createSprite(240,340,20,20);
pin6.shapeColor="darkgray";

var squariad = createSprite(196,48,20,20);
squariad.shapeColor="white";


squariad.velocityX=4;
squariad.velocityY=9;

function draw(){
  background("lightgray");
createEdgeSprites();
pin1.bounceOff(edges);
pin2.bounceOff(edges);
pin3.bounceOff(edges);
pin4.bounceOff(edges);
pin5.bounceOff(edges);
pin6.bounceOff(edges);
squariad.bounceOff(edges);

pin1.bounceOff(squariad);
pin1.bounceOff(pin2);
pin1.bounceOff(pin3);
pin1.bounceOff(pin4);
pin1.bounceOff(pin5);
pin1.bounceOff(pin6);

pin2.bounceOff(squariad);
pin2.bounceOff(pin1);
pin2.bounceOff(pin3);
pin2.bounceOff(pin4);
pin2.bounceOff(pin5);
pin2.bounceOff(pin6);

pin3.bounceOff(squariad);
pin3.bounceOff(pin1);
pin3.bounceOff(pin2);
pin3.bounceOff(pin4);
pin3.bounceOff(pin5);
pin3.bounceOff(pin6);

pin4.bounceOff(squariad);
pin4.bounceOff(pin1);
pin4.bounceOff(pin2);
pin4.bounceOff(pin3);
pin4.bounceOff(pin5);
pin4.bounceOff(pin6);

pin5.bounceOff(squariad);
pin5.bounceOff(pin1);
pin5.bounceOff(pin2);
pin5.bounceOff(pin3);
pin5.bounceOff(pin4);
pin5.bounceOff(pin6);

pin6.bounceOff(squariad);
pin6.bounceOff(pin1);
pin6.bounceOff(pin2);
pin6.bounceOff(pin3);
pin6.bounceOff(pin4);
pin6.bounceOff(pin5);




























  drawSprites() 
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
