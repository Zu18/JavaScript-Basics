/*
How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.

Example
For A = "abc" and B = "abccba", the output should be 2.

We can construct 2 strings A with letters from B.
Input/Output
    [input] string A
    String to construct, A contains only lowercase English letters.
    Constraints: 3 ≤ A.length ≤ 9.
    
    [input] string B
    String containing needed letters, B contains only lowercase English letters.
    Constraints: 3 ≤ B.length ≤ 50.
    
    [output] an integer
*/

function stringsConstruction(A, B) {
// create hash ("a": count, "b": count ...)
  var characterCounters = {}
  for (var i = 0; i < B.length; i++) {
    var character = B.charAt(i);
    var count = characterCounters[character]
    if (!count) {
      count = 0
    }
    count++
    characterCounters[character] = count
  }
  
  
  var result = 0
  // count down letters of A from hash 
  while (true) {
    for (var i = 0; i < A.length; i++) {
      var character = A.charAt(i);
      var count = characterCounters[character]
      if (!count) {
        return result  //(break the loop)if hash does not have value we cant built the string A 
      }
      count--
      characterCounters[character] = count
    }
    result++
  }
}
