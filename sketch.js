
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score,survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(80,510,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,550,1200,10);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
   obstacleGroup = new Group();
  foodGroup = new Group();
  score = 0;
  survivalTime = 0;

  
}


function draw() {
 background("lightBlue");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival Time: "+survivalTime, 350,50);
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
     if(keyDown("space")&& monkey.y >= 514) {
    monkey.velocityY = -13;
  }
     monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  console.log(monkey.y);
  spawnfood();
  spawnobstacle();
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
  }
  
  drawSprites();
}

function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     banana = createSprite(600,250,40,10);
    banana.y = Math.round(random(300,450));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    monkey.depth = banana.depth+1;
    
    
    //adding cloud to the group
   foodGroup.add(banana);
  }
  
}

function spawnobstacle() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
     obstacle = createSprite(800,510,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 300;
    
    //adjust the depth
    
    
    //adding cloud to the group
   obstacleGroup.add(obstacle);
  }
  
}




