var vehicle;
var target;
var aa = 60;

function setup()
{
  createCanvas(700, 500);
  vehicle = createVector(200, 400);
  target = createVector(0, 0);
}

function draw()
{
  background(51);

  target.x = mouseX;
  target.y = mouseY;
  ellipse(target.x, target.y, 50, 50);

  push();
  translate(vehicle.x, vehicle.y);
  rotate(vec.heading());
  stroke(255, 182, 193, 100);
  strokeWeight(4);
  fill("pink")
  triangle(-aa/2, aa*Math.sqrt(3)/4, aa/2, aa*Math.sqrt(3)/4, 0, -aa*Math.sqrt(3)/4)

  pop();
}
