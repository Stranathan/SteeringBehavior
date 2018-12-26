var vehicle1;
var mouseVector;

function setup()
{
  // console.log(Math.PI/10);
  createCanvas(700, 500);
  background(51);
  vehicle1 = new SimpleVehicle(100, 100, 30, 4, .4);
  mouseVector = createVector(mouseX, mouseY);
}

function draw()
{
  frameRate(60);
  background(51)
  vehicle1.flee(mouseVector);
  vehicle1.eulerUpdate();
  vehicle1.display();

  mouseVector.x = mouseX;
  mouseVector.y = mouseY;
}
