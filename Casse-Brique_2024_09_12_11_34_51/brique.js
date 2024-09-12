function Brique() {
  this.x = 30;
  this.y = 25;
  this.brique;
  this.total = 0
  this.totalTabX = [];
  this.totalTabY = [];
  
  this.update = function() {
    this.x = constrain(this.x, 30, width - 65);
    this.y = constrain(this.y, 30, height - 270);
  }
  
  this.show = function() {
    for (var i = 0; i < this.totalTabX.length; i++) {
      fill(130);
      this.brique = rect(this.totalTabX[i], this.totalTabY[i], 40, 10);
    }
    if (this.totalTabX.length < 50 && this.totalTabY.length < 50) {
      fill(130);
      this.brique = rect(this.totalTabX[i], this.totalTabY[i], 40, 10);
    }
  }

  this.creerBrique = function(nb) {
    for (var i = 0; i < nb; i++) {
      // fill(int(random(50, 255)));
      // fill(130);
      // this.brique = rect(this.x, this.y, 40, 10);
      // console.log("x :", this.x, "y :", this.y);
      this.x = this.x + 40;
      // this.y = this.y + 10;
      if (this.x >= width - 65) {
        this.x = 30;
        this.y = this.y + 20;
      }
      if (this.total >= 50) {
        this.total = 0;
      } else {
        this.total++;
      }
      
      this.totalTabX[i] = this.x;
      this.totalTabY[i] = this.y;
      // console.log("total briques:", this.total);
      // console.log("tab x:", this.totalTabX);
      // console.log("tab y:", this.totalTabY);
    }
  }
  
  this.collision = function(pos) {
    // if (this.x >= 170 && this.x <= 230) {
    //   this.y = 370;
    // }
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      return true;
    } else {
      return false;
    }
  }
  // this.creerBrique = function(nb) {
  //   for (let i = 0; i < nb; i++) {
  //     if (this.total > 0 && this.total < nb){
  //         this.x = int(random(60, 380));
  //         this.y = int(random(40, 250));
  //         // for (let j = 0; j < this.total; j++) {
  //         //   // console.log(j, ") x:", this.totalTabX[j], "y:", this.totalTabY[j]);
  //         //   if (this.totalTabX[j-1] +40 == this.x || this.totalTabY[j-1] +10 == this.y ||this.totalTabX[j-1] -40 == this.x || this.totalTabY[j-1] -10 == this.y) {
  //         //     console.log(j, ") x:", this.totalTabX[j], "y:", this.totalTabY[j]);  
  //         //     this.x = int(random(60, 380));
  //         //       this.y = int(random(40, 250));
  //         //       j = 0;
  //         //       // console.log("x:", this.x, "y:", this.y);
  //         //       console.log("nouveau x:", this.x, "nouveau y:", this.y);
  //         //   }
  //         // }
  //           fill(int(random(50, 255)));
  //           this.brique = rect(this.x, this.y, 40, 10);
  //           append(this.totalTabX, this.x);
  //           append(this.totalTabY, this.y);
  //           this.total++;
  //           // console.log(i, ") x:", this.totalTabX[i], "y:", this.totalTabY[i]);
  //           console.log("total :", this.total);
          
  //       } else {
  //           fill(int(random(50, 255)));
  //           this.brique = rect(20, 20, 40, 10);
  //           append(this.totalTabX, 20);
  //           append(this.totalTabY, 20);
  //           this.total++;
  //     }
  //   }
  // }
}