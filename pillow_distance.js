function pillars(numPill, dist, width) {
  var distance = 0
  var pillows_sq = 0
  if (numPill == 1) {
    return 0;
  } else {
    pillows_sq = (numPill - 2) * width;
    distance = (numPill - 1) * dist * 100 
    console.log(distance + pillows_sq)
    return distance + pillows_sq;
  }
}
