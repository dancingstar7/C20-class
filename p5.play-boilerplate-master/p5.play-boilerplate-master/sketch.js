var fix,move;



function setup() {
  createCanvas(1600,800);
  
  fix = createSprite(400, 200, 50, 50);
  move = createSprite(300,200,50,50);

  fix.shapeColor = "purple";
  move.shapeColor = "purple";

  fix.debug = true;
  move.debug = true;
}

function draw() {
  background("cyan");
  
  move.x = mouseX
  move.y = mouseY

  if(move.x - fix.x < move.width/2 + fix.width/2 && fix.x - move.x < move.width/2 + fix.width/2 
    && move.y - fix.y < move.height/2 + fix.height/2 && fix.y - move.y < move.height/2 + fix.height/2  ){
    fix.shapeColor = "pink";
    move.shapeColor = "pink";

  }
  else{
    fix.shapeColor = "purple";
  move.shapeColor = "purple";
  }
  drawSprites();
}