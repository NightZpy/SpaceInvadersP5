function Flower(xPos, yPos) {  
  this.x = xPos == 0 ? 10 : xPos;
  this.y = yPos == 0 ? 20 : yPos;
  this.xSpeed = 1;
  this.height = ( height - 20 + 360 ) / (4 * 5);
  this.width = ( width - 180 ) / 8;
  
  this.show = function () {
    //console.log(xPos);
    //console.log( (this.x + this.width) + ', ' + (this.y + this.height) + ', ' + this.width + ', ' + this.height );
    fill ( 255, 120, 180 );
    ellipse ( this.x + this.width, this.y + this.height, this.width, this.height );
    //console.log ( this.width + ', ' + this.height );
  }
  
  this.move = function ( direction ) {
    this.x += ( this.xSpeed * direction );
  }
  
  this.right = function  () {
    this.move( 1 );
  }
  
  this.left = function () {
    this.move ( -1 );
  }
}