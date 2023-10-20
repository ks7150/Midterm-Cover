
let s0 = "Harry, Ron, Ginny, Cedrik";
let words;

let chosenIndex = -1;


let xPos = 0;


let yPos = 1000;


let xVel = 3;

let cDiam = 15;



function setup() {
  createCanvas(windowWidth, windowHeight);
  words = s0.split(", ")
}


//class Hoop{
//constructor(){
  //this.diam = 20
//this.x= 10
//this.line(10, 300, 10, 500)

//}




function draw() {
  if (second()>15){
    background(0)
    }
    else{background(20,134,106)}


  noStroke()
  
  fill("gold");

  // draw circle
  ellipse(random(xPos), random(yPos), cDiam, cDiam);

  // update pos
  xPos = xPos + xVel;

  // if reset is needed: pick random diameter and reset x
  if (xPos > width + cDiam) {
    cDiam = random(15, 10);
    xPos = 0 - cDiam;
//if (xPos= mouseX){
 // xPos=0
}



noFill()
stroke("silver")
strokeWeight(2)
ellipse(mouseX, mouseY, 30, 60)
line(mouseX, mouseY, mouseX, 1000)



fill(20,134,106)
noStroke()
  redraw([1])
  textSize(40)
text('Quidditch', 900, 100, 100, 100)


if (chosenIndex > -1) {
  text(words[chosenIndex], random(width) , random(height) );
}

}
function mouseClicked (){
  chosenIndex = floor(random(0, words.length))
}



