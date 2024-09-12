function Casseur() {
  this.x = 170;
  this.y = 370;
  this.xSpeed = 0;
  
  this.update = function() {
    this.x = this.x + this.xSpeed;
    this.x = constrain(this.x, 0, width - 60);
  }
  
  this.show = function() {
    fill(50);
    rect(this.x, this.y, 60, 10, 5);
  }
  
  this.direction = function(x) {
    this.xSpeed = x;
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