/*
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

function getMiddle(s){
  let middle;
  if(s.length % 2 !== 0) {
    middle = s.charAt(s.length/2)
  } else {
    middle = s.charAt((s.length/2)-1)+ s.charAt(s.length/2)
  }
  return middle;
}
