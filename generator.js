let boxWidth;
let boxHeight;
let boxDepth;

let distanceX = 20;
let distanceY = 20;

const dpi = 20;

let cam;
let graphics;

let cutOutx;
let cutOuty;

let pattern;
let img;

function preload(){
	img = loadImage("./assets/wires-3.png");

}

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);

	graphics = createGraphics(200, 200);
	pattern = createPattern(img);
	graphics.background(255);

	// cam = createCapture(VIDEO);
	boxWidth = createSlider(dpi, dpi *32, dpi*5);
	boxHeight = createSlider(dpi*5.5, dpi*13.75, dpi * 7);
	boxDepth = createSlider(dpi*0.5, dpi *14.75, dpi*3);
		graphics.fill("pattern")

	for(let x = 10; x < 200; x += distanceX){
		for(let y = 10; y < 200; y += distanceY){

			cutOutx = random(4, 20);
			cutOuty = random(4, 20);

			graphics.ellipse(x,y,cutOutx, cutOuty);
		}

	}

	// cam.hide();


}
function draw(){
	background(200);
	let distanceX = boxWidth.value()/6;
	let distanceY = boxHeight.value()/6;


	push();
	rotateX(frameCount * 0.005);
	rotateY(frameCount * 0.005);
	//texture(cam);



	texture(graphics);


	box(boxWidth.value(), boxHeight.value(), boxDepth.value());
	pop();


	translate(0,200);

	rotateX(HALF_PI);
	plane(500, 500);

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}