const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var girl,girlImg;
var snow = [];


function preload(){
  bgImg = loadImage("snow2.jpg");
  girlImg = loadImage("girl.png");
}

function setup() {
  createCanvas(650,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  girl = createSprite(20, 360, 5, 5);
	girl.addImage(girlImg);
	girl.scale=0.05;
}

function draw() {
  background(bgImg);
  Engine.update(engine);
  ground.display();
  

  if(keyCode === LEFT_ARROW){
    girl.x = girl.x-2;
 }
 
 if(keyCode === RIGHT_ARROW){
 girl.x = girl.x+2;
}
if(keyCode === UP_ARROW){
  girl.y = girl.y-10;

 }
 if(keyCode === DOWN_ARROW){
  girl.y = girl.y+20;

 }
if(frameCount%20===0){
  snow.push(new Snow(random(width/2-300, width/2+300), 10,10));
}

for (var j = 0; j < snow.length; j++) {
  snow[j].display();
}

  drawSprites();
}
