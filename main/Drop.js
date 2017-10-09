Drop = function (x, y) {
  this.x = x;
  this.y = y;
  this.width = 10;
  this.height = 10;
  this.speed = 3;
  
  this.show = function () {    
    fill ( 255 );
    ellipse ( this.x, this.y, this.width, this.height );
    //console.log ( this.x + ', ' + this.y );
  }
  
  this.move = function () {
    this.y -= this.speed; 
    this.show();
  }
}