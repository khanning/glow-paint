let capture, mainCanvas;
let startScreen = true;
let timerInterval = null;

function preload() {
  // logoImg = loadImage('glowdoodle-logo.jpg');
}
function setup() {
  const captureButton = document.querySelector('#capture');
  captureButton.onpointerdown = startCapture;
  captureButton.onpointerup = stopCapture;
  captureButton.ontouchend = stopCapture;

  // pixelDensity(displayDensity()/2);
  // console.log(pixelDensity());
  pixelDensity(1);
    // console.log(pixelDensity());
  mainCanvas = createCanvas(windowWidth, windowHeight);
  capture = createCapture({
    video: {
      facingMode: "environment",
      width: { ideal: width, max: width },
      height: { ideal: height, max: height },
      // aspectRatio: { exact: 1.7777777778 }
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
    // scale(1, 1);
    // translate(-width, 0);
    if (width != capture.width || height != capture.height) {
        let c = capture.get((capture.width-capture.height)/2, 0, height, height);
        image(c, 0, 0);
    } else {
        image(capture, 0, 0, width, width * capture.height / capture.width);
    }
  }
}

function startTimed() {
    if (timerInterval) return;
    const dur = document.querySelector('#duration').value;
    startCapture();
    timerInterval = setTimeout(stopCapture, dur*1000);
}

function clearScreen() {
    clear();
}

function startCapture() {
    startScreen = false;

}

function stopCapture() {
    startScreen = true;
    if (timerInterval) {
        clearTimeout(timerInterval);
        timerInterval = null;
    }
}

function save() {
    save('test', 'png');
}

// function mousePressed(){
  // console.log('mousepressed');
  // if (startScreen) {
    // startScreen = false;
  // }
  // // clear();
  // // background(0);
// }

// function mouseReleased() {
    // startScreen = true;
// }
