// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('')
}

let str = reverseString('hello')
//console.log("Reversed string task N1:" ,str, typeof str)

// 2. Check for Palindrome
function isPalindrome(string) {
  let lengthWord = string.length;
  let cleanedStr = string.toLowerCase();
  for(let i=0; i < lengthWord/2; i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      return false; // Not a palindrome if characters don't match
  }
  return true
  }
}

//console.log(isPalindrome("racecar")); // true
//console.log(isPalindrome("hello"));   // false

// 2. Check for Palindrome (through reversed string)
function isPalindrome2(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters (optional)
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the cleaned string with its reversed version
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Find the largest number in an array
// by using for loop

function findLargestNumber(array) {
  let lagestNumber = -Infinity // Start with the smallest possible value (negative infinity)
  for (let i = 0; i < array.length; i ++ ) {
    if (array[i] > lagestNumber) {
      lagestNumber = array[i]
    }
  }
  return lagestNumber;
}

//console.log(findLargestNumber([3, 7, 9, 2])); // 9

// by Math.max

function findLargestNumber2(array) {
  if (array.length === 0) {
    return null;  // or handle this case as needed
  }
  return Math.max(...array); // Spread the array into individual elements for Math.max()
}

// Test cases
// console.log(findLargestNumber2([3, 1, 4, 1, 5, 9, 2, 6]));  // Output: 9
//console.log(findLargestNumber2([])); // Output: null

// 4. FizzBuzz
// if, else if and else statment
function FizzBuzz(number) {
  if(number%3 === 0 && number%5 === 0) {
    console.log('FizzBuzz')
  } else if(number%3 === 0) {
    console.log('Fizz')
  } else if(number%5 === 0) {
    console.log('Buzz')
  } else {
    console.log(number)
  }
}

console.log(FizzBuzz(15))

// only if + string concatination
function FizzBuzz2(number) {
  let result = '';
  if (number % 3 === 0) result += 'Fizz';
  if (number % 5 === 0) result += 'Buzz';
  // Log the result or the number itself if result is empty
  console.log(result || number)
  // return result || number;  // If result is empty, return the number itself
}

// Testing the function
console.log(FizzBuzz2(15)); // Output: "FizzBuzz"
console.log(FizzBuzz2(9));  // Output: "Fizz"
console.log(FizzBuzz2(10)); // Output: "Buzz"
console.log(FizzBuzz2(7));  // Output: 7

function FizzBuzz3(number) {
  // Create a key based on divisibility
  const key = (number % 3 === 0 ? 'Fizz' : '') + (number % 5 === 0 ? 'Buzz' : '');

  switch (key) {
    case 'FizzBuzz':
      console.log('FizzBuzz');
      break;
    case 'Fizz':
      console.log('Fizz');
      break;
    case 'Buzz':
      console.log('Buzz');
      break;
    default:
      console.log(number);
  }
}

// Testing the function
FizzBuzz3(15); // Output: "FizzBuzz"
FizzBuzz3(9);  // Output: "Fizz"
FizzBuzz3(10); // Output: "Buzz"
FizzBuzz3(7);  // Output: 7

// 5. Count Vowels in a String
function countVowels(str) {
  let vowels = 'a,e,i,o,u'
  let count = 0
  for(let i=0; i < str.length; i++) {
      if(vowels.includes(str[i])) {
          count ++
      } 
  }
  return count;
}

console.log(countVowels("hello")); // 2
console.log(countVowels("sky"));   // 0


// 6. Remove Duplicates from an Array
function removeDuplicates(array) {
  let newArray = [];
  for(let i=0; i < array.length; i++) {
    let elementLowercase = typeof array[i] === 'string' ? array[i].toLowerCase() : array[i];

    if(!newArray.includes(elementLowercase)){
      newArray.push(array[i])
    }
  }
  return newArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 'letter', 'Letter'])); // [1, 2, 3, 4, 'letter']

// 7. Factorial of a Number

function factorial(number) {
  if(number < 0) {
    return "The number is not possitive" || 0
  }
  // factorial of 0 = 1
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  
  return result;
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-3)); // text

// 8. Sum of Array Elements
function sumOfElements(array) {
  let sum = 0
  for(let i=0; i < array.length; i++){
    sum += array[i]
  }
  return sum;
}

console.log(sumOfElements([1,2,3,5]))

// using reduce method
function sumOfElements2(array) {
  return array.reduce((sum, current) => sum + current, 0);
}

console.log(sumOfElements2([1, 2, 3, 5]));  // Output: 11

// 9. Convert Celsius to Fahrenheit
// Fahrenheit = (Celsius * 9/5) + 32
function celsiusToFahrenheit(number) {
   return (number *9/5) +32
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77

//10. Capitalize the First Letter of Each Word

function capitalizeEachWord(string) {
  let array = string.split(' '); // Split the string into an array of words
  for (let i = 0; i < array.length; i++) {
      // Capitalize the first letter of each word and concatenate with the rest of the word
      array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }
  return array.join(' '); // Join the words back into a single string with spaces in between
}

console.log(capitalizeEachWord('i am here')); // Output: "I Am Here"

// by using map and charAt
function capitalizeEachWord(string) {
  return string
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join the words back into a single string with spaces in between
}

console.log(capitalizeEachWord('i am here')); // Output: "I Am Here"


// Prime number
function isPrime(number) {
  // Return false if the number is less than 2, as 0 and 1 are not prime numbers
  if (number <= 1) return false;

  // Only check up to the square root of the number or number-1
  for (let i = 2; i <= Math.sqrt(number); i++) {
      // If the number is divisible by any `i`, it is not prime
      if (number % i === 0) return false;
  }
  
  // If no divisors were found, the number is prime
  return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

// 12. Find the Second Largest Number in an Array
// sort method
function findSecondLargestNumber(array) {
  let sortedArray = array.sort((a,b) => a - b)
  return sortedArray[array.length - 2]
}

console.log(findSecondLargestNumber([3, 1, 4, 1, 5, 9, 2, 6])) // 6

// for loop 
function findSecondLargestNumber2(array) {
  let largest = null;
  let secondLargest = null;

  for (let i = 0; i < array.length; i++) {
      if (array[i] > largest) {
          // Move current largest to second largest
          secondLargest = largest;
          // Update largest
          largest = array[i];
      } else if (array[i] > secondLargest && array[i] < largest) {
          // Update second largest if current element is less than largest
          secondLargest = array[i];
      }
  }
  return [secondLargest, largest];
}

console.log(findSecondLargestNumber2([1,8,10,15,7]))

// 13. Count the Occurrences of a Character in a String
function countChar(text, char) {
  let count = 0;
  for (let i=0; i < text.length; i++){
    if(text[i].toLowerCase() === char.toLowerCase()) {
      count ++
    }
  }
  return count;
}

console.log(countChar("hello world", "o")); // 2
console.log(countChar("hello world", "z")); // 0

//reduce method
function countChar2(text, char) {
  return [...text].reduce((count, letter) => 
    letter === char ? count + 1 : count, 
  0);
}

console.log(countChar2("hello world", "o")); // 2
console.log(countChar2("hello world", "z")); // 0

// filter method 
function countChar3(text, char) {
  return text
    .toLowerCase()
    .split('')
    .filter(letter => letter === char.toLowerCase())
    .length;
}

console.log(countChar3("hello world", "o")); // 2
console.log(countChar3("hello world", "z")); // 0

// regex
function countChar4(text, char) {
  const regex = new RegExp(char, 'gi'); // 'g' for global, 'i' for case-insensitive
  const matches = text.match(regex);    // returns an array of matches or null if no match
  return matches ? matches.length : 0;
}

console.log(countChar4("hello world", "o")); // 2
console.log(countChar4("hello world", "z")); // 0

// 14. Find the Missing Number in an Array
function findMissingNumber(array) {
  for(let i=0; i < array.length; i++){
    if(array[i+1] !== array[i]+1) {
      return array[i+1]
    }
  }
}

console.log(findMissingNumber([1, 2, 4, 5, 6])) //3

// 15. Flatten an Array
function flattenArray(nestedArray){
  return nestedArray.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]

// 16. Sum of Digits in a Number
function sumOfDigits(number) {
  return number
  .toString()
  .split('')
  .map(Number)
  .reduce((sum, n) => sum + n, 0)
}

console.log(sumOfDigits(123)) //6

// for of loop
function sumOfDigits2(number) {
  let sum = 0;
  for (let digit of number.toString()) {
    sum += Number(digit);
  }
  return sum;
}

console.log(sumOfDigits2(123)); // 6
// for loop
function sumOfDigits3(number) {
  let sum =0;
  let array = [...number.toString()]
  console.log(array)
  for (let i=0; i < array.length; i++) {
    sum += Number(array[i])
  }
  return sum
}

console.log(sumOfDigits3(123)); // 6

// 17. Find the Longest Word in a String
function findLongestWord(text) {
  let longestWord = '';
  const array = text.split(' ')
  for(let i= 0; i < array.length; i++ ){
    if(array[i].length > longestWord.length) {
      longestWord = array[i]
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) //jumped

// 19. Check if Two Strings Are Anagrams
function areAnagrams(word1, word2) {
  // Check if lengths are the same; if not, they can't be anagrams
  if (word1.length !== word2.length) {
    return false;
  }
  
  // Sort the letters of each word and compare the results
  const sortedWord1 = word1.split('').sort().join('');
  const sortedWord2 = word2.split('').sort().join('');
  
  return sortedWord1 === sortedWord2;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false

// 20. Find the Intersection of Two Arrays

function intersectionArray(arr1, arr2){
  let intersection = [];
  for(let i =0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
       intersection.push(arr1[i])
    }
  }
  return intersection;
}

console.log(intersectionArray([1, 2, 3, 3, 4], [3, 4, 5])) //[3,4]

// Solution using a Set:
function intersectionArray2(arr1, arr2) {
  // Convert arr2 to a Set for fast lookups
  let set2 = new Set(arr2);
  
  // Filter arr1 to get elements that are also in arr2
  return arr1.filter(item => set2.has(item));
}

console.log(intersectionArray2([1, 2, 3], [3, 4, 5])); // [3]
