var ship;
var flowers = [];
var flowerQuantity = 12;
function setup() {
  createCanvas (800, 600)
  ship = new Ship();
  
  for (var i = 0; i < flowerQuantity; i ++)
    if ( i > 0)
      flowers[i] = new Flower(flowers[i - 1].x + (flowers[i - 1].width + 5), 0);
    else
      flowers[i] = new Flower(0, 0);
}

function draw() {
  background (51);
  ship.show();
  
  for (var i = 0; i < flowerQuantity; i ++)  {
    flowers[i].show();
  }
}

function keyPressed () {
  if ( keyCode === RIGHT_ARROW ) {
    ship.right();
  } else if ( keyCode === LEFT_ARROW ) {
    ship.left();
  }
}