

const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const accessCode1 = "VARIABLE"
const accessCode2 = "FUNCTION"
const accessCode3 = "DATABASE"

var bg,form,system,code,security;
var treasureImg;
var score = 0;


function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  treasureImg = loadImage("treasure.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  //Engine.add(engine);
  //world.add(World);

  security = new Security();
  system = new System();
  code = new Code();
  
  
}

function draw() {
  background(bg);
  //engine.update(Engine);
  clues();
  security.display();
        textSize(20);
        fill("white");
        text("Score: " + score, 450, 50);

    if(score === 3) {
    clear();
    background(treasureImg);
    fill("white");
    stroke(95,33,20);
    strokeWeight(5);
    textFont("Helevetica")
    textSize(60);
    text("TREASURE UNLOCKED",210, 230);
    textSize(30);
    text("Congratulations !", 400,170);
  }

  drawSprites()
}