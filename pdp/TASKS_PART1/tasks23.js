"use strict";

// Common [Polindrom/Multiplicity/Anagram] #23

// Sub-task - 1 (Палиндром)
const polindrom = (str) => {
  if (typeof str === "string") {
    return (str.toLowerCase() === str.toLowerCase().split("").reverse().join("")) ? true : false;
  }
   else {
    return false;
  }
};
console.log("polindrom", polindrom("ab c c ba"));

// Sub-task - 2 (Multiplicity)
const getMultiplesNumbers = (num) => {
  if (typeof num === "number") {
    for (let i = 1; i < num + 1; i++) {
      if (i % 3 === 0 && i % 5 === 0) console.log("multiples of three/five");
      else if (i % 3 === 0) console.log("multiples of three");
      else if (i % 5 === 0) console.log("multiples of five");
      else console.log(i);
    }
  }
};
getMultiplesNumbers(15);

// Sub-task - 3 (Анаграмма)
const upgradeStr = (str) => {
  return  str.toLowerCase().match(/[a-z а-я]/g).sort().join("");
}
const anagram = (str1, str2) =>
upgradeStr(str1)===upgradeStr(str2);
console.log("anagram", anagram("Азбука", "азбука"));

