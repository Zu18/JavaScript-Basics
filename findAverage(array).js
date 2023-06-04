/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

function findAverage(array) {
  if (array.length == 0) {
    return 0
  }
  let sum = 0;
  for (let i=0; i < array.length; i++) {
    sum += array[i];
  }
  let averageSum=sum/array.length
  return averageSum;
}

/*
or dry
function find_average(array) {
  return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
}
*/
