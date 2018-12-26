// rotation matrix for a given (x,y)
// native js returns trig funtions in radians

// given an init x,y and angle of rotation; returns roated x,y coords as array
function rotationXY(xPos, yPos, theta)
{
  var rotatedX = (Math.cos(theta)*xPos)-(Math.sin(theta)*yPos);
  var rotatedY = (Math.sin(theta)*xPos)+(Math.cos(theta)*yPos);
  return [rotatedX, rotatedY]
}

// rotation(theta)
// {
//   let rotArr1 = rotationXY(this.x1, this.y1, theta);
//   let rotArr2 = rotationXY(this.x2, this.y2, theta);
//   let rotArr3 = rotationXY(this.x3, this.y3, theta);
//
//   this.x1 = rotArr1[0];
//   this.y1 = rotArr1[1];
//   this.x2 = rotArr2[0];
//   this.y2 = rotArr2[1];
//   this.x3 = rotArr3[0];
//   this.y3 = rotArr3[1];
// }
