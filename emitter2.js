class Emitter{ // emitter construcor 'abstract'
    constructor(x, y){
        this.position = createVector(x, y); //creates particle at a position x, y
        this.particles = []; //array of particles
    }

    emit(num){ //emitts a certain number of particles on the screen
        for (let i = 0; i < num; i++) { //for loop determines the amount of particles at certain x, y positions
            this.particles.push(new Particle(this.position.x, this.position.y));
        }
    }

    update(){ // update applies forces to the particles
        for (let particle of this.particles) { 
            let gravity = createVector(0, 0.2);
            particle.applyForce(gravity);
            particle.update();
        }
    
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].finished()) {
                this.particles.splice(i, 1);
            }
        }
    }

    show(){// shows particles
        for (let particle of this.particles) {
            particle.show();
        }
    }
}