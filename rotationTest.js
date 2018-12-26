var triangleX = 400;
var triangleY = 200;
var angle = 0;
var aa = 60;

function setup()
{
  createCanvas(700, 500);
}

function draw()
{

  background(51);

  push();
  translate(triangleX, triangleY); // middle
  rotate(angle)

  stroke(255, 182, 193, 100);
  strokeWeight(4);
  fill("pink")
  triangle(-aa/2, aa*Math.sqrt(3)/4, aa/2, aa*Math.sqrt(3)/4, 0, -aa*Math.sqrt(3)/4)

  pop();

  angle += .01;
}
