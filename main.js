let capture, mainCanvas;
let startScreen = true;

function preload() {
  // logoImg = loadImage('glowdoodle-logo.jpg');
}
function setup() {
  mainCanvas = createCanvas(windowWidth, windowHeight);
  capture = createCapture({
    video: {
      facingMode: "environment",
      maxWidth: width,
      maxHeight: height
    },
  });
  capture.hide();
  background(0);
}

function draw() {
  if (startScreen) {
    imageMode(CENTER);
    // image(logoImg, width / 2, logoImg.height / 2);
    textAlign(CENTER);
    fill(255);
    textSize(16);
    // text('click to clear', width / 2, logoImg.height + 20);
    // text('press s to save', width / 2, logoImg.height + 40);
    // text('click to start!', width / 2, logoImg.height + 60);
  } else {
    imageMode(CORNER);
    blendMode(LIGHTEST);
    scale(-1, 1);
    translate(-width, 0);
    image(capture, 0, 0, width, width * capture.height / capture.width);
  }
}

function mousePressed(){
    console.log('mousepressed');
  if (startScreen) {
    startScreen = false;
  }
  // clear();
  // background(0);
}

function mouseReleased() {
    startScreen = true;
}

function keyPressed(){
  if (key === 's') {
    save('glowdoodle.jpg');
  }
}
