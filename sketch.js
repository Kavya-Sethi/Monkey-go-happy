
var monkey , monkey_running,monkey_stop;
var banana ,bananaImage, stone, stoneImage;;
var FoodGroup, stoneGroup;
var Survivaltime=0;
var gr;

function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkey_stop=loadAnimation("sprite_0.png");  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
  
    
FoodGroup=new Group();
  
stoneGroup=new Group();
 
}



function setup() {
   createCanvas(400,400);
  
  monkey=createSprite(50,350,10,50);
  monkey.addAnimation("move",monkey_running);
   monkey.addAnimation("stop",monkey_stop);
  monkey.scale=0.10;
  
  gr=createSprite(50,370,700,10);
  gr.veocityX=-4;
  
}


function draw() {
  background("white");
   text("Survival Time:" +Survivaltime,160,20);
    Survivaltime=Math.ceil(frameCount / frameRate());
  

  if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY=-15; 
   }
  monkey.velocityY=monkey.velocityY+0.5;

  if(gr.x<0){
  gr.x=gr.width/2  ;
  }
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
  
    if(stoneGroup.isTouching(monkey)){
     back.velocityX=0; 
      gr.velocityX=0;
      monkey.velocityY=0;
      monkey.changeAnimation("stop");
      FoodGroup.setLifetimeEach(-1);
      FoodGroup.setVelocityXEach(0);
      stoneGroup.setLifetimeEach(-1);
      stoneGroup.setVelocityXEach(0);
  }
  
  monkey.collide(gr);
  
  
  drawSprites();
  spawnBanana();
 spawnStone();
}

function spawnBanana(){
  if(frameCount%80==0){
  banana=createSprite(500,10,10,10);
  banana.addImage("ba",bananaImage)
  banana.scale=0.1;
  banana.velocityX=-4 
  banana.y=Math.round(random(120,200))
  banana.lifetime=150;
  FoodGroup.add(banana);
} 
}

function spawnStone(){
  if(frameCount%300==0){
  Stone=createSprite(500,350,10,10);
  Stone.addImage("st",stoneImage)
  Stone.scale=0.15;
  Stone.velocityX=-4 
  Stone.lifetime=150;
  stoneGroup.add(Stone);
} 
}






