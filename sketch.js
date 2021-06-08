var gameState = 0
function preload() {
  restartButtonImage = loadImage("restartButton.png")
}
function setup() {
createCanvas(1275,605);

restartButton = createSprite(637, 500, 50, 50);
restartButton.addImage(restartButtonImage)
restartButton.scale = 0.5

score = 0

}

function draw() {
  background(0)

  if(gameState === 0) {

  if(keyDown("space")) {
    score = score + 1
  }

  textSize(90) 
  fill("black")
  strokeWeight(2)
  stroke("white")
  textFont("Curlz MT")
  textStyle(BOLDITALIC)
  text("Spacebar Key Game", 350, 80)

textSize(40) 
fill("black")
strokeWeight(2)
stroke("white")
textFont("Curlz MT")
textStyle(BOLDITALIC)
text("Spacebar pressed             times ", 10, 310)

textSize(90)
text(score, 310, 320)
  }
  

  if(mousePressedOver(restartButton)) {
   score = 0
  }
  drawSprites();

}