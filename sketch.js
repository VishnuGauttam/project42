
function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  hr=hour();
  mn=minute();
  sc=second();
  
 
}

function draw() {
  background("black"); 
  text(mouseX+","+mouseY,10,15)
  translate(300,300);
  textSize(35)

  fill("purple")
  text("EVERY SECOND IS PRECIOUS",-250,-250)

hr=hour();
 mn=minute();
 sc=second()

 strokeWeight(7);
 stroke("blue");
 noFill();
 scAngle=map(sc,0,60,0,360);
arc(0,0,400,400,0,scAngle);

push();
rotate(scAngle);
stroke("blue");
line(0,0,100,0)
pop();

 stroke(" white");
mnAngle=map(mn,0,60,0,360);
arc(0,0,380,380,0,mnAngle);

push();
rotate(mnAngle);
stroke(255);
line(0,0,100,0)
pop();

stroke("red");
hrAngle=map(hr%12,0,60,0,360);
arc(0,0,350,350,0,hrAngle);

push();
rotate(hrAngle);
stroke("red");
line(0,0,100,0)
pop();
}