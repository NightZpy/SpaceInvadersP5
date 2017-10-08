Ship = function () {
  this.x = width / 2;
  this.xSpeed = 5;
  this.height = 12;
  this.width = 50;
  
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
}