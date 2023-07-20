/*
16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

function getDigits(number) {
  return number.toString().split('').map(Number);
}

function digitalRoot(n) {
  let digits = getDigits(n);
  let sum = digits.reduce((a, b) => a + b, 0);
  let lengthSum = sum.toString().length
  while (lengthSum !== 1) {
    sum = getDigits(sum).reduce((a, b) => a + b, 0)
    lengthSum = sum.toString().length;
  }
  return sum;
  }
