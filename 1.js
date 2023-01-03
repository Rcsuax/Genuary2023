function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);

  fill(255, 204, 0)
  noStroke()
  circle(windowWidth/2, windowHeight/2,  100);

  fill(0, 0, 255)
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  circle(0, 0, 20);
}
