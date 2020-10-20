var monkey,monkeyAnime,monkeyfall;
var banana,bananaImg;
var obstacleImg,obstaclegroup;
var scene,backgroundImg ;
var score=0;
var bananaCount;
var ground;
var GameState,PLAY,END,collide;
var gameover,restart;

function preload(){
  monkeyAnime = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  monkeyfall=loadImage("Monkey_11.png")
  backgroundImg=loadImage("jungle.jpg");
  bananaImg=loadImage("banana.png")
  obstacleImg=loadImage("stone.png")
  
  
}

function setup() {
  createCanvas(800, 400);
  scene = createSprite(0,0,800,200);
  scene.scale=1.9;
  scene.velocityX=-4;
  scene.addImage(backgroundImg);
  
  monkey = createSprite(100,315,20,50);
  monkey.scale=0.1;
  monkey.addAnimation("monkey",monkeyAnime);
  
  ground=createSprite(500,350,800,10);
  ground.velocityX=-4;
  ground.visible =false;
  
  
  
  GameState = 1;
  PLAY = 1;
  END = 0;
  
  bananaGroup= new Group();
  obstacleGroup= new Group();
  
}

function draw() {

 
 if(keyDown("space") && monkey.y > 250){ 
   monkey.velocityY = -12 ;
}  
monkey.velocityY=monkey.velocityY+0.8;
    
monkey.collide(ground);  
  
if(ground.x<0){
ground.x=ground.width/2;
}
if(scene.x<0){
scene.x=scene.width/2;
}
if(bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();
   score= score +2;
}
if(obstacleGroup.isTouching(monkey)){
   monkey.scale=0.06;
}
   
   switch(score){
  case 10: monkey.scale=0.12;
          break;
  case 20: monkey.scale=0.14;       
          break;
  case 30: monkey.scale=0.16;
          break;
  case 40: monkey.scale=0.18;
          break;
  default: break;        
 }  
  
  
 food();
 obstacle();


 // monkey.changeAnimation(monkeyfall);



  drawSprites();

  stroke("black")
  textsize=20;
  fill("white")
  text("Score: "+ score,400,50);
  
  
} 

 
 
  
function food() {
  if (frameCount%200===0) {
    
    var banana=createSprite(800,320,20,20);
    banana.y=random(200,250);
    banana.addImage(bananaImg);
    banana.scale=0.05;
    banana.velocityX=-10;
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
  
}

function obstacle() {
if (frameCount%300===0){
  
  var stone=createSprite(800,315,10,10);
  stone.addImage(obstacleImg);
  stone.scale=0.2;
  stone.velocityX=-10;
  stone.lifetime=200;
  obstacleGroup.add(stone);
  
 }
}