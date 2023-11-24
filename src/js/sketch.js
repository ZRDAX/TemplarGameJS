let player;
let zombies = []; // add this
function setup() {
  createCanvas(700, 700);
  player = new Player();
}

function draw() {
  background(100, 100, 100);
  rectMode(CENTER);
  player.draw();
  player.update(); 
  
  for (let zombie of zombies) { // add this
    zombie.draw();
    zombie.update();
  }
  
  if (frameCount % 200 == 0) {   // add this
    zombies.push(new Zombie(2));
  }
}

function mouseClicked() {
  player.shoot();
}awdawdawd