var sceneWidth = 800;
var sceneHeight = 600;
var ship;
var flowers = [];
var flowersRow = 4;
var flowersCol = 8;
var flowerQuantity = flowersRow * flowersCol;
var leftOffset = 25;
var topOffset = 20;
var mouseIsPressed = false;

function setup() {
  createCanvas (sceneWidth, sceneHeight)
  ship = new Ship();
  initFlowers();

}

function draw() {
  background (51);
  ship.show();
  if ( mouseIsPressed ) 
    ship.shot();  
  ship.moveDrops();    
  
  for (var i = 0; i < flowersRow; i ++)  {
    flowersRowItem = flowers[i];
    for (var j = 0; j < flowersCol; j ++) {
      flowersRowItem[j].show();
    }    
  }
}

function keyPressed () {
  if ( keyCode === RIGHT_ARROW ) {
    ship.right();
  } else if ( keyCode === LEFT_ARROW ) {
    ship.left();
  }
}

function mousePressed () {
  if ( mouseButton == LEFT ) {
    mouseIsPressed = true;    
  }
}

function initFlowers () {
  for (var i = 0; i < flowersRow; i ++) {
    flowers[i] = []
    for (var j = 0; j < flowersCol; j ++) {
      var flowerX = 0;
      var flowerY = 0;
      if ( i == 0 && j == 0 ) {
        flowerX = leftOffset;
        flowerY = topOffset;
      } else {
        if ( i == 0 && j > 0 ) {
          flowerX = flowers[i][j - 1].x + (flowers[i][j - 1].width + 5);
          flowerY = topOffset;
        } else if ( i > 0 && j == 0 ) {
          flowerX = leftOffset;
          flowerY = flowers[i - 1][j].y + (flowers[i - 1][j].height + 5);
        } else {
          flowerY = flowers[i - 1][j].y + (flowers[i - 1][j].height + 5);
          flowerX = flowers[i][j - 1].x + (flowers[i][j - 1].width + 5);
        }
      }      
      flowers[i][j] = new Flower( flowerX, flowerY);     
    }
  }
}