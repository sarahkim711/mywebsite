
let ellipseX  = 0;
let ellipseY = 0;
let a;
let aYspeed = 3;
let aXspeed= 3;
let b;
let c;


let pointX = 400;
let pointY = 200;



function setup() {
  //setup code goes once
  createCanvas(windowWidth,windowHeight);
  background(random(255),random(255),random(255));
  rectMode(CENTER);

  // print(random(300));

  ellipseX= random(ellipseX, windowWidth);
  ellipseY= random(ellipseY, windowHeight);


}

function draw() {
  // draw code goes in a loop


// ellipse(ellipseX,ellipseY,150,150);
// fill(30,255,60);
// strokeWeight(3);
// ellipse(400,500,300);
// noFill();
// rect(500,400,200,200);
frameRate(.8);
  background(random(255),random(150),random(255));
// ellipse(mouseX, mouseY, 10,10);
fill(random(255));
stroke(30);
strokeWeight(30);
// line(30,30, 30,300);
// stroke(100,200,300);


// let type = 'Hello World!...compiling...';
// fill(50);
// text(type, 10, 10, 70, 80);

let a = createA('https://sarahkim711.github.io/iampolygon/', 'I Am Polygon');
a.position(windowWidth/4, windowHeight/4);

if (a > windowHeight || a < 0){
aYspeed= aYspeed * -1;
}


let b = createA('https://sarahkim711.github.io/p5jsProject/', 'MyAdPreference();');
b.position(windowWidth/2, windowHeight/2);

let c = createA('https://sites.google.com/artic.edu/vr-so-far/jacking-in', '...All my VR works...');
c.position(windowWidth/3, windowHeight/3);

// point(mouseX, mouseY);
// point(pointX, pointY);
// strokeWeight(20);


}
