"use strict";

// Common [Polindrom/Multiplicity/Anagram] #23

// Sub-task - 1 (Палиндром)
const polindrom = (str) => {
  if (typeof str === "string") {
    if (str === str.split("").reverse().join("")) {
      return true;
    } else return false;
  } else return false;
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
const anagram = (str1, str2) =>
  str1.toLowerCase().match(/[a-z]/g).sort().join("") ===
  str2.toLowerCase().match(/[a-z]/g).sort().join("");

console.log("anagram", anagram("abc111, Qwe.", "Qweabcd"));
