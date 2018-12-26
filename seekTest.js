var vehicle1;

function setup()
{
  // console.log(Math.PI/10);
  createCanvas(700, 500);
  background(51);
  vehicle1 = new VehicleOne(100, 100, 30, 4, .4);
  mouseVector = createVector(mouseX, mouseY);
}

function draw()
{
  background(51)
  vehicle1.arrive(mouseVector);
  vehicle1.eulerUpdate();
  vehicle1.display();

  mouseVector.x = mouseX;
  mouseVector.y = mouseY;
}
