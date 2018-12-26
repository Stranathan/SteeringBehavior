var canvasWidth;
var canvasHeight;
var vehicle1;
var positionVectorArr;
var mouseVec;

function preload()
{
  canvasWidth = 700;
  canvasHeight = 500;
}
function setup()
{
  // console.log(Math.PI/10);
  createCanvas(canvasWidth, canvasHeight);
  positionVectorArr = new Array();

  var v1 = createVector(80, canvasHeight/2);
  var v2 = createVector(canvasWidth-80, canvasHeight/2);
  positionVectorArr.push(v1);
  positionVectorArr.push(v2);

  mouseVec = createVector(mouseX, mouseY);

  bowieInSpace = createVector(canvasWidth/2, canvasHeight/2);
}

function draw()
{
  frameRate(60);
  background(51)
  stroke('white');
  strokeWeight(3);
  line(bowieInSpace.x, bowieInSpace.y, 0, 0)
  // line(positionVectorArr[0].x, positionVectorArr[0].y, positionVectorArr[1].x, positionVectorArr[1].y);
  stroke('red');
  line(mouseVec.x, mouseVec.y, 0, 0);

  stroke('blue');
  var diffVec = p5.Vector.sub(mouseVec, bowieInSpace);
  line(bowieInSpace.x, bowieInSpace.y, diffVec.x + bowieInSpace.x, diffVec.y + bowieInSpace.y)

  mouseVec.x = mouseX;
  mouseVec.y = mouseY;
}
