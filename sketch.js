var fixed, moving;
var car, wall;

function setup() {
  createCanvas(1000,1000);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200, 200, 70, 30);
fixed.shapeColor = "blue";
moving.shapeColor = "green"
car = createSprite(300, 200, 50, 50);
wall = createSprite(800, 200, 40, 150);
car.shapeColor = "orange";
wall.shapeColor = "yellow";
car.velocityX = 3;
}
function draw() {
  background("black");  

  if(isTouching(moving,wall)){
textSize(35);
fill ("pink");
text("the car has touched the wall", 400, 900);
car.velocityX = 0;
  }
  else{ 
    textSize(35);
    fill ("pink");
    text("the car has not touched the wall", 400, 900);
  }

moving.x = mouseX
moving.y = mouseY
bounceOff(car, wall);
  drawSprites();
}

function isTouching(p1, p2){
  if( p1.x - p2.x<p1.width/2 + p2.width/2
    && p2.x - p1.x<p1.width/2 + p2.width/2
    && p1.y - p2.y<p1.height/2 + p2.height/2
    && p2.y - p1.y<p1.height/2 + p2.height/2){
return true;
  }
  
  else{
return false;
  }
}
function bounceOff(p1, p2){
  if( p1.x - p2.x<p1.width/2 + p2.width/2
    && p2.x - p1.x<p1.width/2 + p2.width/2){
      p1.velocityX = (-1)*p1.velocityX
    }
    else if(p1.y - p2.y<p1.height/2 + p2.height/2
    && p2.y - p1.y<p1.height/2 + p2.height/2){
      p1.velocityY = (-1)*p1.velocityY
}
}