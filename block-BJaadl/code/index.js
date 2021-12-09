let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence. Need to learn more.
function findLongestWord(arr) {
  let longWord = arr.sort((a, b) => a.length - b.length);
  return longWord.pop();
} 
// - Convert the above array "words" into an array of length of word instead of word.
let wordLength = words.map(word => word.length);
console.log(wordLength);
// - Create a new array that only contains word with atleast one vowel.
let vowelWord = words.filter((word) => {
  if (
    word.toLowerCase().includes('a') ||
    word.toLowerCase().includes('e') ||
    word.toLowerCase().includes('i') ||
    word.toLowerCase().includes('o') ||
    word.toLowerCase().includes('u')
    ) {
      return true;
    }
  }
);
console.log(vowelWord);
// - Find the index of the word "rhythm"
console.log(words.indexOf(`rhythm`));
// - Create a new array that contians words not starting with vowel.
let notVowelWord = words.filter((word) => {
  if (
    word.toLowerCase().includes('a') ||
    word.toLowerCase().includes('e') ||
    word.toLowerCase().includes('i') ||
    word.toLowerCase().includes('o') ||
    word.toLowerCase().includes('u')
    ) {
      return false;
    } else {
      return true;
    }
  }
);
console.log(notVowelWord);
// - Create a new array that contianse words not ending with vowel

let endVowelWords = words.filter(
  (word) => {
    if (
    word.toLowerCase().endsWith('a') ||
    word.toLowerCase().endsWith('e') ||
    word.toLowerCase().endsWith('i') ||
    word.toLowerCase().endsWith('o') ||
    word.toLowerCase().endsWith('u')
    ) {
      return false;
    } else {
      return true;
    }
  }
)
console.log(endVowelWords);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumOfAll(arr) {
  let finalSum = arr.reduce(
    (acc, cv) => acc + cv, 0
  );
  return finalSum;
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let threeMultiples = numbers.filter(num => num % 3 === 0);
console.log(threeMultiples);
// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);
// - Create a new array that should have true for even number and false for odd numbers.
let stat = numbers.map(num => num % 2 === 0);
console.log(stat);
// - Sort the above number in assending order.
let asc = [...numbers].sort((a, b) => a - b);
console.log(asc);
// - Does sort mutate the original array?
// Yes
// - Find the sum of the numbers in the array.
console.log(sumOfAll(numbers));
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(arr) {
  let totSum = arr.reduce(
    (acc, cv) => acc + cv, 0
  )
  let avg = totSum / (arr.length);
  return avg;
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(arr) {
  let arrLength = arr.map(word => word.length);
  let totSum = arrLength.reduce((acc, cv) => acc + cv, 0);
  let avgLength = totSum / arr.length;
  return avgLength;
}
