let distanceX = 150;
let distanceY = 200;
let circleSizeX;
let circleSizeY;

let bgColor;
let newColor, amt;

let canvasWidth;
let canvasHeight;

let lengthY = 135;
let dist = 55
var slider;




function setup(){
		


	createCanvas(windowWidth, windowHeight);

	bgColor = color('blue');
	newColor = color(random(255), random(255), random(255));
	amt = 0;





	background(255);
	fill(bgColor);
	for (var x = 40; x < windowWidth; x += distanceX){
		
     for (var y = 30; y < windowHeight; y += distanceY){
	 let circleSizeX = random(10, 100);
	 let circleSizeY = random(10, 200);
	 let rectRadius = random(10, 200);

			rect(x, y, circleSizeX, circleSizeY, rectRadius);

		}
	}
	


	}




function draw(){
	//background(70);


	let distanceX = windowWidth/6;
	let distanceY = windowHeight/6



	// rect(windowWidth/2, windowHeight/2, 20, 20, 20);

// 
	// line(windowWidth/1.5, lengthY, distanceX, lengthY);
	// line(windowWidth/1.5, lengthY+ dist, distanceX, lengthY + dist);
	//line(windowWidth/3, windowHeight/3, windowWidth/3, distanceY);


	
		


}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  background(255);

  	fill(lerpColor(bgColor, newColor, amt));
	amt += 0.05;
	if(amt >= 1){
		amt = 0;
		bgColor = newColor;
		newColor = color(random(255), random(255), random(255));
	}
  let distanceX = windowWidth/6;
	let distanceY = windowHeight/6
  	for (var x = 40; x < 2000; x += distanceX){
		
     for (var y = 30; y < 2000; y += distanceY){
	 let circleSizeX = random(10, 100);
	 let circleSizeY = random(10, 100);
	 let rectRadius = random(20, 200);

			rect(x, y, circleSizeX, circleSizeY, rectRadius);


		}
	}
	




}
