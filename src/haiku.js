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
  let presentVowels = [];
  // For each line
  // split lines into words
  for (let i = 0; i < values.length; i++) {
    let lineLetters = values[i].toLowerCase().split("");
    console.log(lineLetters);
    // let wordLetters = values[i].split("");
    const vowels = ["a", "e", "i", "o", "u", "y"];
    lineLetters.forEach(function (lineLetter) {
      if (vowels.includes(lineLetter)) {
        presentVowels.push(lineLetter);
      }
    });
  }
  // for (let i = 0; i < values.length; i++)

  //Count vowels in the word
  // let presentVowels = word.includes(vowels);
  // let vowelNumber = presentVowels.length;
  return presentVowels.length;
}



  // values.forEach(function(value) {
  //   let number = /\d+/;
  //   let numberArray = value.match(number);


// export function Row(row0, row1, row2, row3, row4, row5, row6, row7, row8) {
//   this.row0 = row0;
//   this.row1 = row1;
//   this.row2 = row2;
//   this.row3 = row3;
//   this.row4 = row4;
//   this.row5 = row5;
//   this.row6 = row6;
//   this.row7 = row7;
//   this.row8 = row8;
// } 
// Row.prototype.rowCheck = function() {
//   var total = this.row0 + this.row1 + this.row2 + this.row3 + this.row4 + this.row5 + this.row6 + this.row7 + this.row8;
//   return total;
// }

// Row.prototype.checkDoubles = function() {
//   var alicia = Object.values(Row);
//   alicia.reduce(function(a, b){ return (a === b) ? a : NaN; });
// }