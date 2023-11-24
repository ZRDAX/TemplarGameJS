class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2)
    this.angle = 0;
    this.bullets = []; // add this
  }
  
  draw() { // update draw
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    rect(0, 0, 20, 20);
    pop();

    for (let bullet of this.bullets) {  // add this
      bullet.update();
      bullet.draw();
    }
    
  }
  
  update() {
    let xSpeed = 0;
    let ySpeed = 0;
    if (keyIsDown(65)) {
      xSpeed = -3;
    }

    if (keyIsDown(68)) {
      xSpeed = 3;
    }

    if (keyIsDown(87)) {
      ySpeed = -3;
    }

    if (keyIsDown(83)) {
      ySpeed = 3;
    }
    this.pos.add(xSpeed, ySpeed);
    this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x); // add this
  }

  shoot() { // add this
    this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle));
  }
}