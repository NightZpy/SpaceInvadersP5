var sceneWidth = 800;
var sceneHeight = 600;
var ship;
var flowers = [];
var flowersRow = 4;
var flowersCol = 8;
var flowerQuantity = flowersRow * flowersCol;
var leftOffset = 25;
var topOffset = 20;
var innerOffset = 25;
var mouseIsPressed = false;

function setup() {
  createCanvas (sceneWidth, sceneHeight)
  ship = new Ship();
  initFlowers();
}

function draw() {
  background (51);
  ship.show(); 
  
  if ( mouseIsPressed ) {
    ship.shot();
    mouseIsPressed = false;
  }
      
  ship.moveDrops();
  
  for (var i = 0; i < flowersRow; i ++)  {
    flowersRowItem = flowers[i];
    for (var j = 0; j < flowersCol; j ++) {
      if ( !flowersRowItem[j].collide ( ship.drops ) )
        if ( !flowersRowItem[j].toDestroy )
          flowersRowItem[j].show();
      else
        flowersRowItem[j].destroy();        
    }
  }
    
  for (var i = flowersRow - 1; i >= 0; i --)  {
    flowersRowItem = flowers[i];
    for (var j = flowersCol - 1; j >= 0; j --) {
      if ( flowersRowItem[j].toDestroy )
        flowersRowItem[j].slice(j, 1);
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
          flowerX = flowers[i][j - 1].x + (flowers[i][j - 1].width + this.innerOffset);
          flowerY = topOffset;
        } else if ( i > 0 && j == 0 ) {
          flowerX = leftOffset;
          flowerY = flowers[i - 1][j].y + (flowers[i - 1][j].height + this.innerOffset);
        } else {
          flowerY = flowers[i - 1][j].y + (flowers[i - 1][j].height + this.innerOffset);
          flowerX = flowers[i][j - 1].x + (flowers[i][j - 1].width + this.innerOffset);
        }
      }      
      flowers[i][j] = new Flower( flowerX, flowerY);     
    }
  }
}