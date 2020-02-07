import { arrayExpression } from "@babel/types";
import { getChangedFilesForRoots } from "jest-changed-files";

// Business-Logic

export function HaikuLines(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;

}

// Check if each line has a number in it
HaikuLines.prototype.numberCheck = function () {
  // Turn all items in the HaikuLines object into an array
  const values = Object.values(this);
  // Look in each item of the array
  for (let i = 0; i < values.length; i++) {
    // Create a variable that holds all numbers
    let number = /\d+/;
    // Create an array of numbers that are found in an item line
    let numberArray = values[i].match(number);
    // Check if that array exists
    if (numberArray) {
      // Numbers were in an array
      return "error";
    } else {
      // Numbers were not in an array
      return "success";
    }
  };
};

HaikuLines.prototype.puncCheck = function () {
  const values = Object.values(this);
  let result = "success";
  for (let i = 0; i < values.length; i++) {
    let badChars = ["$", "%", "&", "=", "@", "#", "-"];

    let inputArray = values[i].split("")
    let intersection = badChars.filter(x => inputArray.includes(x));

    if (intersection.length > 0) {
      result = "fail";
    }
    return result;
  };
};

// Check for number of syllables in a line
HaikuLines.prototype.syllableCheck = function () {
  const values = Object.values(this);
  let presentVowelsTotal = [];
  // For each object value
  for (let i = 0; i < values.length; i++) {
    let presentVowels = [];
    // Turn line into an array of all letters in the line
    let lineLetters = values[i].toLowerCase().split("");
    const vowels = ["a", "e", "i", "o", "u", "y"];
    
    
    
    // For each letter in the line, check it against vowels array
    for (let i = 0; i < lineLetters.length; i++) {
        if (vowels.includes(lineLetters[i])) {
          if (!vowels.includes(lineLetters[i - 1])) {
            presentVowels.push(lineLetters);
          };
        };
    };
    
    
    // Rejoin the letters array back into the original line
    let line = lineLetters.join("");
    // count the number of es
    let words = line.split(" ");
    let e = 0;
    words.forEach(function (word) {
      if (word[word.length-1] === "e") {
        e++;
      }; 
    });
    // Subtract number of exceptions from number of vowels present
    let syllables = presentVowels.length - e;
    // Push number of syllables into present vowels array
    presentVowelsTotal.push(syllables);
  };
  return presentVowelsTotal;
};

