

let xPos = 0;


let yPos = 1000;


let xVel = 1;

let cDiam = 15;
let cDiam1= 40;


function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  
// background fade 
let periodcounter = second() % 30;
let c1= color(20,134,106);
let c2= color(0,0,0);
let amt= map(periodcounter,0,29,0, 1); 
let bcolor= lerpColor(c1, c2, amt);
background(bcolor)
// ball for quidditch
  noStroke()

  fill("gold");
  
  let Randx= random(xPos)
let Randy= random(yPos)

  // draw circle

  ellipse(Randx, Randy, cDiam, cDiam);

// reset the position of the ball 

 let distancetoball = dist(Randx, Randy, mouseX, mouseY);

 if ( distancetoball < 30){ 
  xPos=0 
 }


  // update pos
  xPos = xPos + xVel;

  // if reset is needed: pick random diameter and reset x
  if (xPos > width + cDiam) {
    cDiam = random(15,20);
    xPos = 0 - cDiam;

}

///// Quaffle- other ball that is present in the game. 

let xPosbig= random(xPos)
let yPosbig= random(yPos)
let Randx1= random(xPosbig)
let Randy1= random(yPosbig)

  // draw circle
fill(255,0,0)
  ellipse(Randx1, Randy1, cDiam1, cDiam1);

// reset the position of the ball 

 let distancetoball1 = dist(Randx1, Randy1, mouseX, mouseY);

 if ( distancetoball1 < 90){ 
  xPosbig=0 
 }

  // update pos
  xPos = xPos + xVel;

  // if reset is needed: pick random diameter and reset x
  if (xPos > width + cDiam1) {
    cDiam1 = random(15,20);
    xPos = 0 - cDiam1;

}

/////HOOP
noFill()
stroke("silver")
strokeWeight(5)
ellipse(mouseX, mouseY, 30, 60)
line(mouseX, mouseY, mouseX, 1000)

//////TEXT

let textcolor= color(20,134,106)
fill(textcolor)
noStroke()
  redraw([1])
  textSize(100)
text('Quidditch', 900, 100, 100, 100)
textSize(20)
text ('Harry Potter and the Philosophers Stone', 900,200,400,100)

// score to indicate that the ball has touched the loop 

let touchpoint = dist(Randx, Randy, mouseX, mouseY)
if( touchpoint<30){
  fill(255,0,0)
  textSize(80)
  text('150', 900, 330, 900, 200)
  
}
let touchpoint2 = dist(Randx1, Randy1, mouseX, mouseY)
if( touchpoint2<90){
  fill(0,0,255)
  textSize(80)
  text('10', 900, 250, 900, 200)

}
}
