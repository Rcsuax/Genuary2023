var a = 70;  //Set up the horizontal amplitute
var b = 50;  //Set up the vertical amplitute
var angle = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(100);
}

function draw() {
	background(100);
	var x = a*cos(angle);
  var y = b*sin(angle);
	angle++;

	if(angle < 100) {
		noFill()
		circle(windowWidth/2 + x, windowHeight/2 + y, 20);	
	}
}
