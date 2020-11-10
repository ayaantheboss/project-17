var fixedRect;
var movingRect



function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(500, 200, 50, 100);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;


  movingRect = createSprite(200,200,100,50);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
}

function draw() {
  background("lightblue");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

console.log(fixedRect.x - movingRect.x);

if(fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
  movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)

{
fixedRect.shapeColor = "darkblue";
movingRect.shapeColor = "darkblue"
  
}

else{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}

  drawSprites();
}
