function Flower(xPos, yPos) {  
  this.x = xPos == 0 ? 10 : xPos;
  this.y = yPos == 0 ? 20 : yPos;
  this.xSpeed = 1;
  this.height = ( height - 20 + 360 ) / (4 * 5);  
  this.width = ( width - 350 ) / 8;
  this.ratio = this.width;
  this.diameter = this.ratio * 2;
  this.toDestroy = false;
  this.color = color(0, 255, 120, 180);
  this.alphaColor = color (100, 0, 0, 0);
  
  this.show = function () {
    //console.log(xPos);
    //console.log( (this.x + this.width) + ', ' + (this.y + this.height) + ', ' + this.width + ', ' + this.height );
    if (! this.toDestroy )     
      fill ( this.color );
      
    ellipse ( this.x + this.width, this.y + this.height, this.width, this.width );
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
  
  this.collide = function ( drops ) {
    for (var i = 0; i < drops.length; i ++)
      return drops[i].hits (this);
  }
  
  this.destroy = function () {
    this.toDestroy = true;   
  }
}