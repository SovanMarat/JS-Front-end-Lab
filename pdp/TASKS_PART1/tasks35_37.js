"use strict";

// [Array] - Vowel search #35
const vowels = ["a", "e", "i", "o", "u"];

const findVowels = (str) => {
  let arr = str.toLowerCase().split("");
  let result = arr.reduce((acc, elem) => {
    if (vowels.includes(elem)) acc += 1;
    return acc;
  }, 0);
  return result;
};
console.log('vowels', findVowels("vowels we R E"));

// [Object] - Online Shopping #37
const freeShipping = (bag) => {
  let arrBag = Object.values(bag);
  let totalMoney = 0;
  if (arrBag.length > 0) {
    totalMoney = arrBag.reduce((acc, elem) => (acc += elem), 0);
  }
  return totalMoney > 50 ? true : false;
};

console.log(
  "free",
  freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
);
