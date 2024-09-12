function Bille() {
  this.x = 198.7;
  this.y = 360;
  this.xSpeed = 0;
  this.ySpeed = 0;
  
  this.update = function() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    this.x = constrain(this.x, 0 +5, 400 -5);
    this.y = constrain(this.y, 0 +5, 400 -5);
  }
  
  this.show = function() {
    fill('red');
    createVector(this.x, this.y);
    circle(this.x, this.y, 8);
  }

  this.direction = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

  this.collision = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      return true;
    } else {
      return false;
    }
  }
}
