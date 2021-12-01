

class Particle {
    constructor(x, y) {
      this.pos = createVector(x, y); //position component
      this.vel = p5.Vector.random2D(); //velocity component
      this.vel.mult(random(0.5, 2)); //velocity multiplier
      this.acc = createVector(0, 0); //accelerator component
      this.r = 4; // radius
      this.lifetime = 255; //lifetime on screen
    }
  
    finished() { // actually incorporation the lifetime in the sketch
      return this.lifetime < 0;
    }
  
    applyForce(force) { //applies force and adds additional forces
      this.acc.add(force);
    }
  
    edges() { //conditionals determine the change in velocity when interacting with another object
      if (this.pos.y >= height - this.r) {
        this.pos.y = height - this.r;
        this.vel.y *= -1;
      }
  
      if (this.pos.x >= width - this.r) {
        this.pos.x = width - this.r;
        this.vel.x *= -1;
      } else if (this.pos.x <= this.r) {
        this.pos.x = this.r;
        this.vel.x *= -1;
      }
    }
  
    update() { //updating vel, pos, and acceleration of sketch
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0, 0);
  
      this.lifetime -= 5;
    }
  
    show() {
      stroke(255, this.lifetime);
      strokeWeight(2);
      fill(255, this.lifetime);
  
      ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
  }
  