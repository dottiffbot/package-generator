// language paperscript
// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.11/paper-full.min.js
/* globals paper*/
/* exported downloadSVG*/

// add a slider for canvas....

// use calc?

var width = 800;
var height = 800; 

var distanceX = 200;
var distanceY = 200;


// circleSizeX.forEach(circle => )

function randomNum(min, max){
	return Math.random() * (max - min) + min;
}

for(var x = 40; x < 2000; x += distanceX){
	// += distance between 
var circleSizeX =  randomNum(10, 100);
var circleSizeY = randomNum(10, 200);
	for(var y = 30; y < 1000; y += distanceY){
    new Path.Ellipse(new Point(x, y), circleSizeX, circleSizeY).strokeColor = 'yellow';


	}
}

function onResize(event){

}





