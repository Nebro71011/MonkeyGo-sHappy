
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

var survivalTime=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velcotiyX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
}

function draw() {
  background("white");
  
  if (keyDown("space") && monkey.y>=300){
    monkey.velocityY= -13;
    
  }
   monkey.velocityY=monkey.velocityY+0.5 ;
  
  if (ground.x<0){
    ground.x=geound.width/2;
  }
 
  food();
  obstacleFun();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time " + survivalTime,100,50);
  
  monkey.collide(ground);

  drawSprites();
}

 function food(){
   if (frameCount% 80 === 0){
     banana=createSprite(410,120,10,10);
     banana.y=Math.round(random(120,200))
     banana.addImage(bananaImage);
     banana.velocityX= -4;
     banana.scale=0.1 ;
     banana.setLifetime=150;
     FoodGroup.add(banana);
   }
  }

 function obstacleFun(){
   if (frameCount% 300 === 0){
     obstacle=createSprite(410,325,10,10);
     obstacle.addImage(obstacleImage);
     obstacle.velocityX= -4;
     obstacle.scale=0.1;
     obstacle.setLifetime=150;
     obstacleGroup.add(obstacle);
   }
  }



