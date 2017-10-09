Ship = function () {
  this.x = width / 2;
  this.xSpeed = 5;
  this.height = 12;
  this.width = 50;
  this.drops = [];
  this.cDrops = 0;
  this.millisecond = millis();
  
  this.show = function () {
    fill ( 255 );
    rectMode ( CENTER );
    rect ( this.x, height - this.height, this.width, this.height  );
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
  
  this.shot = function () {
    console.log ('Millis: ' + millis() + '; Old: ' + this.millisecond );
    console.log ('Diff: ' + (millis() - this.millisecond) );
    if ( (millis() - this.millisecond) / 1000 > 3 ) {    
      this.drops[this.cDrops] = new Drop(this.x, height - this.height);    
      this.drops[this.cDrops].show();    
      this.cDrops ++;      
    }
    this.millisecond = millis();
  }
  
  this.moveDrops = function () {
    for (var i = 0; i < this.cDrops; i ++)
      this.drops[i].move();
  }
}