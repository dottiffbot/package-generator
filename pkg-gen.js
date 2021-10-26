const dpi = 72;
const distPanelsX = 145;
const distPanelsY = 215;
const startCanvasX = 100;
const startCanvasY = 10;
let boxWidth = 7;
let boxHeight = 3;
let boxDepth = 2;

let pattern;
let img;

function preload(){
	img = loadImage("./assets/wires-3.png")
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	pattern = createPattern(img);

}
function draw(){
	background(255)
	fillPattern(pattern)
	stroke(0)
	strokeWeight(1)

	//draw the faces

	// left
	rect(startCanvasX, startCanvasY + distPanelsY, dpi * boxDepth, dpi * boxHeight);

	// left tab

	//right tab

	// right
	
	rect(startCanvasX+ distPanelsX *4.48, startCanvasY + distPanelsY , dpi * boxDepth, dpi *boxHeight);

	// fill(255, 0, 0)

	//FRONT
	rect(startCanvasX + distPanelsX, startCanvasY + distPanelsY*2, dpi * boxWidth, dpi * boxHeight);

	// fill(0,255, 0)

	//BOTTOM 
	rect(startCanvasX + distPanelsX, startCanvasY + distPanelsY*3, dpi * boxWidth, dpi * boxDepth);

	// fill(0, 0, 255);
	//BACK
	rect(startCanvasX + distPanelsX, startCanvasY+ 70 , dpi * boxWidth, dpi *boxDepth);

	fill(0, 255, 255);

	//TOP
	rect(startCanvasX + distPanelsX, startCanvasY + distPanelsY, dpi * boxWidth, dpi * boxHeight)


// save the box
	if((keyIsPressed == true) && (key == 's')){

                 save("box.svg");
                 print('it is pressed');
            }

}



function windowResized (){
	resizeCanvas(windowWidth, windowHeight);
}