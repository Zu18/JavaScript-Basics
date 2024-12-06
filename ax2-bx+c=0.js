/* 
x * y = 4 * 8 = 32 = multiply

The result should be [4, 8].

Note:

0 <= x <= 1000

0 <= y <= 1000

If there is no solution, your function should return null (or None in python).

You should return an array (list in python) containing the two values [x, y] and it should be sorted in ascending order.

One last thing: x and y are integers (no decimals). 
*/
var sumAndMultiply = function(sum, multiply) {
    // x + y = sum, x * y = multiply => x = sum -y => (sum -y)*y=multiply; => y**2 -sum*y + multiply = 0
    // Solve a general quadratic equation y=(sum +/- Math.sqrt((sum**2) - 4*multiply))/2;
  let a = (sum + Math.sqrt((sum**2) - 4*multiply))/2;
  let b = (sum - Math.sqrt((sum**2) - 4*multiply))/2;
  if (a%1 !== 0 || b%1 !== 0){
    return null; // for decimals
  }
  let array= [];
  array.push(a,b)
  return array.sort((a,b) => a-b); // to sort in ascending order
}
