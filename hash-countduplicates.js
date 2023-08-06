/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text){
  let hash = {};
  let duplicateCount = 0;
  if(text.length === 0) {
    return 0
  }
  for(let i=0; i < text.length; i++){
    let char = text[i].toLowerCase(); 
    if(hash.hasOwnProperty(char)) {
      hash[char] += 1
    } else {
      hash[char] = 1; // Initialize the count to 1 if the character is encountered for the first time
    }
  }
  
  for (const key in hash) {
    if (hash[key] > 1) {
      duplicateCount += 1; // Count the number of characters with more than one occurrence
    }
  }
  return duplicateCount;
}
