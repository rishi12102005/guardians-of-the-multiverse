var friend1,friend1Image,friend2,friend2Image,friend3,friend3Image;
var enemy1,enemy1Image,enemy2,enemy2Image,enemy3,enemy3Image;
var laserBlaster,laserBlaster1,laserBlaster2,laserBlaster3,laserBlaster4;
var laserBlasterImage;
var laserBlasters = [];
var enemies = [];
var friends = [];
var planet,planetImage;
var bgImage;
var laser,laser1,laser2,laser3,laser4,laserFire;
var lasers = [];
var edges;
var bullet,bullet1,bullet2,bullet3,bullet4,bullet5,bulletImage;
var bullets = [];
var explosion,explosionAnim;
var enemyGroup;



function preload(){
friend1Image = loadImage("friend1.png");
friend2Image = loadImage("friend2.png");
friend3Image = loadImage("friend5.png");

enemy1Image = loadImage("enemy1.png");
enemy2Image = loadImage("enemy2.png");
enemy3Image = loadImage("enemy3.png");

planetImage = loadImage("planet.png");
laserBlasterImage = loadImage("laser gun.png");
bgImage = loadImage("universe.jpg");

laserFire = loadAnimation("laser1.png","laser2.png","laser3.png","laser4.png");
bulletImage = loadImage("bullet.png");

explosionAnim = loadAnimation("explosion1.png","explosion2.png","explosion3.png","explosion4.png","explosion5.png","explosion6.png","explosion7.png","explosion8.png","explosion9.png","explosion10.png","explosion11.png","explosion12.png","explosion13.png","explosion14.png","explosion15.png");




}
function setup(){
   createCanvas(windowWidth,windowHeight);
 edges = createEdgeSprites();

  friend1 = createSprite(1000,400,50,50);
  friend1.addImage(friend1Image);
  friend1.scale = 1.4;

  friend2 = createSprite(1000,300,50,50);
  friend2.addImage(friend2Image);
  friend2.scale = 1.4;
  
  friend3 = createSprite(1000,200,50,50);
  friend3.addImage(friend3Image);
  friend3.scale = 1.6;

  planet = createSprite(1200,500,50,50);
  planet.addImage(planetImage);
  planet.scale = 3;

  enemy1 = createSprite(100,100,50,50);
  enemy1.addImage(enemy1Image);
  enemy1.scale = 1.4;

  enemy2 = createSprite(100,250,50,50);
  enemy2.addImage(enemy2Image);
  enemy2.scale = 1.7;

  enemy3 = createSprite(100,400,50,50);
  enemy3.addImage(enemy3Image);
  enemy3.scale = 1.7;

    laserBlaster = createSprite(100,0,50,50);
    laserBlaster.addImage(laserBlasterImage);
    laserBlaster.scale = 1;
  
    laserBlaster1 = createSprite(400,windowHeight,50,50);
    laserBlaster1.addImage(laserBlasterImage);
    laserBlaster1.scale = 1;
  
    laserBlaster2 = createSprite(500,0,50,50);
    laserBlaster2.addImage(laserBlasterImage);
    laserBlaster2.scale = 1;
  
    laserBlaster3 = createSprite(800,windowHeight,50,50);
    laserBlaster3.addImage(laserBlasterImage);
    laserBlaster3.scale = 1;
  
    laserBlaster4 = createSprite(900,0,50,50);
    laserBlaster4.addImage(laserBlasterImage);
    laserBlaster4.scale = 1;

    laserBlasters = [laserBlaster,laserBlaster1,laserBlaster2,laserBlaster3,laserBlaster4];
laserBlasters[0].rotation = 130;
laserBlasters[1].rotation = -15;
laserBlasters[2].rotation = 50;
laserBlasters[3].rotation = -130;
laserBlasters[4].rotation = 20;

enemyGroup = createGroup();
friends = [friend1,friend2,friend3];

explosion = createSprite(enemy1.x,enemy1.y,30,40);
explosion.addAnimation("explode",explosionAnim);
explosion.scale = 0.5;

explosion.visible = false;



  }

function draw(){
  background(bgImage);

  friend1.rotation = -90;
  friend2.rotation = -90;
  friend3.rotation = -90;
enemy1.rotation = 90;
enemy2.rotation = 90;
enemy3.rotation = 90;


bullet1.rotation = 270;
bullet2.rotation = 270;

bullet4.rotation = 270;
bullet5.rotation = 270;


if(keyDown("left")){
  friend1.x = friend1.x-3
}
if(keyDown("up")){
  friend1.y = friend1.y-3;
}
if(keyDown("down")){
  friend1.y = friend1.y+3;
}
if(keyDown("right")){
  friend1.x = friend1.x+3;
  friend1.rotation = friend1.rotation-180;
}

enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

friends[0].bounceOff(edges);
friends[1].bounceOff(edges);
friends[2].bounceOff(edges);

enemy1.x = enemy1.x+3;
enemy2.x = enemy2.x+3;
enemy3.x = enemy3.x+3;

if(enemy1.bounceOff(edges)){
enemy1.velocityX = -5
}
if(enemy2.bounceOff(edges))
{
  enemy2.velocityX = -6
}

if(enemy3.bounceOff(edges)){
  enemy3.velocityX = -5;
}

enemyGroup.add(enemy1,enemy2,enemy3)

  if(keyDown("F")){

  createBullet();
        bullet.velocityX = -5;
        bullet3.velocityX = -5;

        bullet.rotation = 270;
bullet3.rotation = 270;
      }

  if(bullet.isTouching(enemyGroup)){
    explosion.visible = true;
  }



 

fire();

  drawSprites();

}
function fire(){
  if(frameCount%200===0){
    laser = createSprite(laserBlasters[0].x-20,laserBlaster.y+50,30,0);
    laser.addAnimation("firing",laserFire);
    laser.scale = 0.2;

    laser.rotation = 130;
    laser.velocityX = -5;
    laser.velocityY = 5;

    laser1 = createSprite(laserBlasters[1].x+20,laserBlasters[1].y-20,30,0);
    laser1.addAnimation("firing",laserFire);
    laser1.scale = 0.2;
    
    
  laser1.velocityX = 3;
  laser1.velocityY = -1;
  laser1.rotation = -10

  laser2 = createSprite(laserBlasters[2].x,laserBlasters[2].y,30,0);
  laser2.addAnimation("firing",laserFire);
  laser2.scale = 0.2;

  laser2.rotation = 45;
  laser2.velocityX = 5;
  laser2.velocityY = 5;

  laser3 = createSprite(laserBlasters[3].x,laserBlasters[3].y+30,30,0);
  laser3.addAnimation("firing",laserFire);
  laser3.scale = 0.2;

  laser3.rotation = -130;
  laser3.velocityX = -4;
  laser3.velocityY = -5;

  laser4 = createSprite(laserBlasters[4].x,laserBlasters[4].y-10,30,0);
  laser4.addAnimation("firing",laserFire);
  laser4.scale = 0.2;

  laser4.rotation = -155;
  laser4.velocityX = 6;
  laser4.velocityY = 3;
  lasers = [laser1,laser2,laser3,laser4];

lasers[0].lifetime = 200;
lasers[1].lifetime = 400;
lasers[2].lifetime = 200;
lasers[3].lifetime = 200;
    
  }
}

function createBullet(){
  var bullet = createSprite(friends[0].x+20,friends[0].y+20,20,3);
  bullet.addImage(bulletImage);
  bullet.scale = 0.09;

  var bullet3 = createSprite(friends[0].x+20,friends[0].y-20,20,3);
  bullet3.addImage(bulletImage);
  bullet3.scale = 0.09;
}

