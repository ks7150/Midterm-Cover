

let xPos = 0;


let yPos = 1000;


let xVel = 3;

let cDiam = 15;



function setup() {
  createCanvas(windowWidth, windowHeight);

}

//class Hoop{
//constructor(){
  //this.diam = 20
//this.x= 10
//this.line(10, 300, 10, 500)

//}

function draw() {
  
  //if (second()>15){
  //  background(0)
   // }
   // else{background(20,134,106)}
// background fade 


let periodcounter = second() % 30;
let c1= color(20,134,106);
let c2= color(0,0,0);
let amt= map(periodcounter,0,29,0, 1); 
let bcolor= lerpColor(c1, c2, amt);
background(bcolor)

  noStroke()

  fill("gold");

  let Randx= random(xPos)
let Randy= random(yPos)

  // draw circle
  ellipse(Randx, Randy, cDiam, cDiam);

 //if( mouseX == Randx && mouseY == Randy) {
//xPos=0}

// reset the position of the ball 

 let distancetoball = dist(Randx, Randy, mouseX, mouseY);

 if ( distancetoball < 30){ 
  xPos=0
 }


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
  textSize(100)
text('Quidditch', 900, 100, 100, 100)
}


