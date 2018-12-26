var vehicle1;
var positionVectorArr;
var canvasWidth;
var canvasHeight;
var mouseVec;
var vehicle1;

function preload()
{
  canvasWidth = 700;
  canvasHeight = 500;
}
function setup()
{
  createCanvas(canvasWidth, canvasHeight);
  positionVectorArr = new Array();
  vehicle1 = new SimpleVehicle(canvasHeight-30, canvasHeight-30, 30, 4, .4);
  var v1 = createVector(10, 20);
  var v2 = createVector(canvasWidth-80, canvasHeight/2);
  positionVectorArr.push(v1);
  positionVectorArr.push(v2);

  mouseVec = createVector(mouseX, mouseY);
}

function draw()
{
  frameRate(60);
  background(51)
  stroke('white');
  strokeWeight(3);

  line(positionVectorArr[0].x, positionVectorArr[0].y, positionVectorArr[1].x, positionVectorArr[1].y);
  mouseVec.x = mouseX;
  mouseVec.y = mouseY;

  vehicle1.path(positionVectorArr);
  vehicle1.eulerUpdate();
  vehicle1.display();
}
