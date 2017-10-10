Drop = function (x, y) {
  this.x = x;
  this.y = y;
  this.ratio = 5;
  this.diameter = this.ratio * 2;
  this.width = this.height = this.diameter;
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
  
  this.hits = function (flower) {
    distance = dist (this.x, this.y, flower.x, flower.y);
    //console.log ('Distance: ' + distance + '; ' + (this.ratio + flower.ratio));
    if ( distance < ( this.ratio + flower.ratio ) )
      return true;
    return false;
  }
}