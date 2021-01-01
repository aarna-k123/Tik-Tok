hr = hour();
mn = minute();
sc = second();

push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  scAngle = map(sc,60,0,360);
  hrAngle = map(hr,60,0,360);
  mnAngle = map(hr,60,0,360);
  drawSprites();
}