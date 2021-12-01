

let emitters = []; //emitter array

function mousePressed(){ //mouse pressed function, calls emitter array when mouse is clicked and displays particles
  emitters.push(new Emitter(mouseX, mouseY)); //pushes emitters to the display
}

function setup() {
  createCanvas(400, 400);
  emitters[0];
}

function draw() {
  background(0);

  for(let emitter of emitters){
    emitter.emit(5); //displays 5 particles continuously over a period of time
    emitter.show();
    emitter.update();
  }

}
