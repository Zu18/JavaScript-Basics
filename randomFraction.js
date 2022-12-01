function randomFraction() {
  return Math.random();
}



function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
// Math.floor() function to round the value down to the nearest whole number.


function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
