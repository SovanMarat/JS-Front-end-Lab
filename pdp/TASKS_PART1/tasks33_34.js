"use strict";

// [Object] - Lowercase and Uppercase Map #33
const mapping = (arrLetters) => {
  let objLetters = {};
  arrLetters.forEach((elem) => {
    objLetters[elem.toLowerCase()] = elem.toUpperCase();
  });
  return objLetters;
};
console.log('Lowercase and Uppercase Map', mapping(["A", "b", "c"]));

// [Object] - Calculate Total Losses #34

const getSum = (stolenltems) => {
  let arrStolenltems = Object.values(stolenltems);
  if (arrStolenltems.length === 0) return "lucky";
  return arrStolenltems.reduce((prev, current) => (prev += current), 0);
};

console.log("Calculate Total Losses", getSum({
    tv: 30,
    skate: 20,
    stereo: 50,
  }));