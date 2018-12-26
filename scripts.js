path(arrayOfPoints)
{
  // position vector from origin to point a
  var pathStartPointVector = createVector(arrayOfPoints[0], arrayOfPoints[1]);
  // position vector from origin to point b
  var pathEndPointVector = createVector(arrayOfPoints[2], arrayOfPoints[3]);
  // relative position vector from a to point b
  var pathSegment = createVector();
  pathSegment = p5.Vector.sub(pathEndPointVector, pathStartPointVector);

  // time / frame / physics step
  var delTime = 5;

  var velocityCopy = this.velocity.copy();
  // no accl kinematics --     // future position if continued along velocity
  var delPos = createVector();
  var positionPrime = this.position.copy();
  var delPos = velocityCopy.mult(delTime);
  positionPrime.add(delPos);

  // the relative position between future position of vehicle and point a
  var relativePathPosition = createVector();
  relativePathPosition = p5.Vector.sub(positionPrime, pathStartPointVector);

  // dot product for angle between the relative future position and path segment
  var dotProd = (relativePathPosition.x * pathSegment.x) + (relativePathPosition.y * pathSegment.y);
  var magMult = relativePathPosition.mag()*pathSegment.mag();
  var theta = Math.acos(dotProd/magMult);

  var orthoHeight = relativePathPosition.mult(Math.sin(theta));

  // orthogonal position = relativePathPosition.mult(Math.cos(theta));
  var orthoPosPlusALittle = createVector();
  orthoPosPlusALittle = relativePathPosition.mult(Math.cos(theta)); //actual orthogonal vec
  orthoPosPlusALittle.mult(1.1);

  if(orthoHeight.mag() > this.pathRadius)
  {
    this.seek(orthoPosPlusALittle);
  }
}
