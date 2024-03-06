let radius = 50;
let angle = 0;
let angle1 = -1;
let speed = 0.05;
var R = 0;

let centerX = 300;
let centerY = 300;

let audioIn;

function setup() {
  createCanvas(1920, 1080);

  rectMode(CENTER);

  mic = new p5.AudioIn();
  mic.getSources(gotSources);
}

function gotSources(deviceList) {
  if (deviceList.length > 0) {
    mic.setSource(0);
    let currentSource = deviceList[mic.currentSource];
    print("set source to: " + currentSource.label);
    mic.start();
  }
}

// function gotSources(deviceList) {
//   if (deviceList.length > 0) {
//     //set the source to the first item in the deviceList array
//     audioIn.setSource(1);
//     let currentSource = deviceList[audioIn.currentSource];
//     text('set source to: ' + currentSource.deviceId, 5, 20, width);
//   }
// }

function draw() {
  background(0);
  noStroke();
  const a = color(0, 0, 153);
  const b = color(102, 0, 153);
  const d = color(315, 124);
  const e = color(32, 124, 161);
  const c = color(15, 24, 61);

  fill(d);

  posX = mic.getLevel(1) * 50;
  posY = mic.getLevel(1) * 50;

  circPosX = mic.getLevel(1) * 5;
  circPosY = mic.getLevel(1) * 5;

  timeLoop = millis();

  if (timeLoop > 500) {
    let R = -1;
  }

  if (timeLoop <= 500) {
    let R = 1;
  }

  fill(0);
  stroke(32, 124, 161);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 440, posX + 440);

  stroke(32, 124, 161);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 420, posX + 420);

  stroke(32, 124, 161);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 400, posX + 400);

  stroke(102, 0, 153);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 380, posX + 380);

  stroke(102, 0, 153);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 360, posX + 360);

  stroke(102, 0, 153);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 340, posX + 340);

  stroke(32, 124, 161);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 320, posX + 320);

  stroke(0, 0, 173);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 300, posX + 300);

  stroke(0, 0, 173);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 280, posX + 280);

  stroke(32, 124, 161);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 260, posX + 260);

  stroke(255, 122, 153);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 240, posX + 240);

  stroke(255, 122, 153);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 220, posX + 220);

  stroke(255, 122, 153);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 200, posX + 200);

  stroke(102, 0, 153);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 180, posX + 180);

  stroke(102, 0, 153);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 160, posX + 160);

  stroke(102, 0, 153);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 140, posX + 140);

  stroke(32, 124, 161);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 120, posX + 120);

  stroke(32, 124, 161);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 100, posX + 100);

  stroke(32, 124, 161);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 80, posX + 80);

  stroke(0, 0, 173);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 60, posX + 60);

  stroke(0, 0, 173);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 40, posX + 40);

  stroke(0, 0, 173);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY + 20, posX + 20);

  stroke(0, 0, 153);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(300, 300, posY, posX);

  //   fill(300)
  //   stroke(0, 0, 153);
  //   strokeWeight(4);
  //   circle(250, 250, 350)

  // fill(300)
  // stroke(0, 0, 153);
  // strokeWeight(4);
  // circle(250, 250, 350)

  // ellipse(56, 46, 55, 55);

  // ellipseMode(CORNER);
  // fill(c);
  // ellipse(25, 25, 50, posY);
  // ellipseMode(CORNERS);
  // fill(e);
  // ellipse(25, 25, 50, 50);

  translate(width / 2, height / 2);
  rotate(-R);
  // rotate (angle);
  stroke(255, 122, 153);
  // draw shape as though (centerX, centerY) is the new
  // origin / (0, 0) point
  // circle(radius, posY, 10);
  // ellipse(posX, radius, 10, 10)
  circle(radius, posX, 10);
  ellipse(posX * -1, radius, 10);
  // circle(50, radius, 10);

  //line(0, 0, radius, 0);
  // angle = angle + speed*posX;

  rotate(angle + 8);
  circle(posX + 50, radius, 10);

  rotate(angle + 1);

  circle(radius * 4, posY * 2, 10);
  ellipse(posX * 2, radius * -4, 10, 10);

  rotate(angle + 2);
  circle(radius * 3, posY * -2, 10);
  ellipse(posX * -2, radius * -4, 10, 10);

  rotate(-R);
  // rotate (angle);
  stroke(32, 124, 161);
  fill(32, 124, 161);
  // draw shape as though (centerX, centerY) is the new
  // origin / (0, 0) point
  // circle(radius, posY, 10);
  // ellipse(posX, radius, 10, 10)
  circle(radius, posX, 5);
  ellipse(posX * -1, radius, 5);
  // circle(50, radius, 10);

  //line(0, 0, radius, 0);
  // angle = angle + speed*posX;

  rotate(angle + 8);
  circle(posX + 50, radius, 5);

  rotate(angle + 1);

  circle(radius * 4, posY * 2, 5);
  ellipse(posX * 2, radius * -4, 5);

  rotate(angle + 2);
  circle(radius * 3, posY * -2, 5);
  ellipse(posX * -2, radius * -4, 5);

  push();
  R += 0.01;

  //   angle1 = angle1*-1 + speed/posY*-1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
