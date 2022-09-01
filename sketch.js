var fruit;
var fruitsGroup;
var ground;

function preload() {
  boyAnimation = loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png");
  fruit1Image = loadImage("apple.png");
  fruit2Image = loadImage("banana.png");
  fruit3Image = loadImage("orange.png");
  fruit4Image = loadImage("strawberry.png");
  bgImage = loadImage("forest.png");
}

function setup() {
  createCanvas(800,400);
   score = 0;
  
  bg = createSprite(400,210);
  bg.addImage(bgImage);
  bg.scale = 1.5;
  bg.velocityX = 2;

  boy = createSprite(50, 200, 50, 50);
  boy.addAnimation("boy",boyAnimation);
  boy.scale = 2;

  fruitsGroup = new Group()

  ground = createSprite(200,380,600,20);
}

function draw() {
  background(0);  

  if(bg.x > 600) {
    bg.x = bg.width/2
  }
  fruits();
  drawSprites();
  fill("blue");
  textSize(30);
  text ("score" + score,100,100)
  if(fruitsGroup.isTouching(boy)) {
    //score = score+5;
    score = score+Math.round(getFrameRate()/60);
    //removeFruit();
    fruit.destroy();
  }

  if(keyDown("up_arrow")) {
    boy.velocityY = -10;
  }
  boy.velocityY = boy.velocityY+0.7;

  boy.collide(ground);
  ground.visible = false;
}

function removeFruit(fruit) {
  fruit.visible = false;
}

function fruits() {
  if(frameCount%60 === 0) {
  fruit = createSprite(800, 200);
  fruit.velocityX = -5;
  var rand = Math.round(random(1,4));
  fruit.y = Math.round(random(20,350));
  switch(rand) {
    case 1: fruit.addImage(fruit1Image)
    fruit.scale = 0.2
    break;
    case 2: fruit.addImage(fruit2Image)
    fruit.scale = 0.2
    break;
    case 3: fruit.addImage(fruit3Image)
    fruit.scale = 0.2
    break;
    case 4: fruit.addImage(fruit4Image)
    fruit.scale = 0.2
    default: break;
  }
  fruitsGroup.add(fruit);
}
}