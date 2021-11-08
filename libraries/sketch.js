//var bg , bg2, bg3 ;
var bgimg , bg2img, bg3img ;
//var mango, pineapple,grapes,custard_apple,banana,apple;
var mangoimg, pineappleimg,grapesimg,custard_appleimg,bananaimg,appleimg;
//var flower_1, flower_2,flower_3,flower_4;
var flower_1img, flower_2img,flower_3img,flower_4img;

function preload(){
bgimg=loadImage("images/background.jpg");
bg2img=loadImage ("images/background_2.jpg");
bg3img=loadImage("images/level_1.jpg");
mangoimg=loadImage("images/mango.png");
pineappleimg=loadImage("images/pineapple.png")
grapes=loadImage("images/grapes.png");
custard_appleimg=loadImage("images/custard_apple.png");
bananaimg=loadImage("images/banana.png");
appleimg=loadImage("images/apple.png");
flower_1img=loadImage("images/flower_1.png");
flower_2img=loadImage("images/flower_2.png");
flower_3img=loadImage("images/flower_3.png");
flower_4img=loadImage("images/flower_4.png");
lion=loadSound("images/lion.mp3");
playimg=loadImage("images/play.png");
level=loadImage("images/level.png");
monkey=loadImage("images/monkey.png");
monkey_1=loadImage("images/monkey_1.png");


}

function setup(){
  createCanvas(900,700);
  background(0);


   block_1=createSprite(890,350,10,900);
   block_2=createSprite(450,670,700,10);
   

  back=createSprite(450,350);
  back.addImage(bgimg);
  back.scale=0.18;

  play=createSprite(450,600,20,20);
  play.addImage(playimg);

  level_1 = createSprite(50,650,30,30);
  level_1.addImage(level);
  level_1.scale=0.1;
  level_1.visible=false;

  monkeyimg=createSprite(700,40,30,30);
  monkeyimg.addImage(monkey);
  monkeyimg.scale=0.3
  monkeyimg.visible=false;

  mango=createSprite(350,200,20,20);
  mango.addImage(mangoimg);
  mango.scale=0.15;
  mango.visible=false;

  grape=createSprite(380,220,20,20);
  grape.addImage(grapes);
  grape.scale=0.03;
  grape.visible=false;

  pineapple=createSprite(320,120,20,20);
  pineapple.addImage(pineappleimg);
  pineapple.scale=0.3;
 pineapple.visible=false;


}

function draw(){

  if(mousePressedOver(play)){
    Sound1();
    play.destroy()
    back.addImage(bg2img);
    level_1.visible=true;

  }

  if (mousePressedOver(level_1)){
     level_1.destroy();
     back.addImage(bg3img);
     back.scale=0.75;
     monkeyimg.visible=true;
     monkeyimg.velocityX=Math.random(-5,5);
     monkeyimg.velocityY=Math.random(-5,5);
     if(World.frameCount%10===0){
     mango.visible=true;
     mango.velocityX=2;
     grape.visible=true;
     grape.velocityX=2
     pineapple.visible=true;
     pineapple.velocityX=2;
     }
     



  }


  drawSprites();
}


function Sound1(){
  lion.play();
  
}

