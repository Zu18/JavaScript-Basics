/*
splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
*/

function splitAndMerge(string, separator) {
  let words = string.split(' ');
  let array = []
  for (let i = 0; i<words.length; i++){
    word = words[i].split('').join(separator);
    console.log(word)
    array.push(word) 
  }
  return array.join(" ")
}
