var casseur;
var brique;
// var brique = [];
// var briqueImage;
var bille;
// let fondImage;

// function preload(){
  // fondImage = loadImage("/assets/fond2.png");
  // briqueImage = loadImage("/assets/brick.png");  
// }

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  casseur = new Casseur();
  bille = new Bille();
  brique = new Brique();
  // background(fondImage);
}

function draw() {
  background(220);
  // background(fondImage);
  // image(briqueImage, 0, 0);
  // if (brique.total == 0) {
  //   brique.creerBrique(20);
  // }
  casseur.update();
  casseur.show();
  brique.creerBrique(50);
  brique.show();
  brique.update();
  bille.show();
  bille.update();

  if (bille.collision(casseur)) {
    
  }
  if (bille.collision(brique)) {
    
  }
  
  // ???
  // if (keyIsDown(32)) {
  // }
}

function keyPressed() {
  // if (key == ' ') {
    // casseur.pause();
    // casseur.end();
  // }
  if (keyCode === UP_ARROW) {
    bille.direction(0, -1);
  }
  if (keyCode === LEFT_ARROW) {
    casseur.direction(-1)
  } else if (keyCode === RIGHT_ARROW) {
    casseur.direction(1)
  } else if (keyCode === DOWN_ARROW) {
    casseur.direction(0)
  }
}