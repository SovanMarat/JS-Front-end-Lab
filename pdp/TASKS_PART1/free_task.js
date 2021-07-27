"use strict";

// Who Left the Array?
function missing(arr1, arr2) {
  let result;
  arr1.forEach((el, i) => {
    let a = arr2.findIndex((el2) => el === el2);
    if (a !== -1) {
      delete arr1[i];
      delete arr2[a];
    } else result = el;
  });
  console.log(arr1);
  return result;
}

// console.log(
//   missing([true, true, false, false, true], [false, true, false, true])
// );
// missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]) ➞ 2
// missing([true, true, false, false, true], [false, true, false, true] ➞ true
// missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]) ➞ "ugly"

//Add up the Numbers from a Single Number
const addUp = (n) => {
  let result = 0;
  for (let i = n; i > 0; i--) {
    result += i;
  }
  return result;
};

// console.log(addUp(4));

// East or West

const direction = (arr) => {
  const chekList = {
    e: "w",
    a: "e",
    s: "s",
    t: "t",
    E: "W",
    A: "E",
    S: "S",
    T: "T",
  };
  return arr.map((el) => {
    let temp = el.split("").map((el2) => {
      if (chekList[el2]) {
        return chekList[el2];
      } else {
        return el2;
      }
    });
    return temp.join("");
  });
};
// console.log(direction(["east", "EAST", "eastEAST"]));
// direction(["east", "EAST", "eastEAST"]) ➞ ["west", "WEST", "westWEST"]
// direction(["eAsT EaSt", "EaSt eAsT"]) ➞ ["wEsT WeSt", "WeSt wEsT"]

// задача от Димы
const lines = [
  { size: "opt1", width: 435 },
  { size: "opt2", width: 385 },
];

const multiplyArray = (arr, n) => {
  let temp = new Array((arr.length-1)*n);
  return temp.fill(arr).flat();
};
console.log(multiplyArray(lines, 3));

// тоже самое, с другим синтаксисом
// const multiplyArray = (arr, n) =>
//   Array((arr.length - 1) * n)
//     .fill(arr)
//     .flat();
// console.log(multiplyArray(lines, 3));
