"use strict";

// ** Object #10
let car = { name: "Lada" };
const avtoPark = [car]; // элемент массива ссылается на объект
// car.name = 'Volvo'; - так мы могли бы поменять значение свойства name
car = null; // присваиваем переменной car новое значение, но объект остается в памяти т.к. к нему есть связь от переменной avtoPark
console.log("#10", avtoPark); // { name: 'Lada' } - т.к. элемент массива продолжает ссылаться на объект

// ** Array (Вернуть параметры наименьшего элемента в массиве) #11
const getMinItemParam = (arr) => {
  if (arr.every((e) => typeof e === "number") && arr.length > 0) {
    const minItem = { index: 0, value: arr[0] };
    arr.forEach((e, i) => {
      if (e < minItem.value) {
        minItem.index = i;
        minItem.value = e;
      }
    });
    return minItem;
  }
  console.log("массив должен содержать числа");
  return null;
};
console.info("#11 test getMinItemParam", [
  getMinItemParam([1, 0, 2, 3]),
  getMinItemParam([90000, 15, 100, 45, 99, 13, 2]),
  getMinItemParam([-500, 0, 50]),
  getMinItemParam(["f"]),
  getMinItemParam([false]),
  getMinItemParam([""]),
  getMinItemParam([null]),
  getMinItemParam([]),
]);

// ** Array [Управление парами] #12
function makePair() {
  let dafaultArray = [55, 66, 77, 88];
  let arr = [...dafaultArray, ...arguments];
  const result = arr.sort((a, b) => a - b);
  return result;
}
console.info("#12 test makePair", [
  makePair(1, 2),
  makePair(91, 92),
  makePair(1, 100),
]);

// ** Array [Reverse an Array] #13
const getReverseArray = (arr) => arr.reverse();
console.info("#13 test reverse", [
  getReverseArray([1, 2, 3, 4]),
  getReverseArray([9, 9, 2, 3, 4]),
  getReverseArray([]),
]);

// ** Operator - typeof Examples #14
console.group("#14 Operator");
console.log(typeof ""); // "string"
console.log(typeof "hello"); // "string"
console.log(typeof String("hello")); // "string"
console.log(typeof new String("hello")); // "object"
console.log(typeof 0); // "number"
console.log(typeof -0); // "number"
console.log(typeof 0xff); // "number"
console.log(typeof -3.142); // "number"
console.log(typeof Infinity); // "number"
console.log(typeof -Infinity); // "number"
console.log(typeof NaN); // "number"
console.log(typeof Number(53)); // "number"
console.log(typeof new Number(53)); // "object"
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"
console.log(typeof new Boolean(true)); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof Symbol()); // "symbol"
console.log(typeof []); // "object"
console.log(typeof Array(5)); // "object"
console.log(typeof function () {}); // "function"
console.log(typeof new Function()); // "function"
console.log(typeof new Date()); // "object"
console.log(typeof /^(.+)$/); // "object"
console.log(typeof new RegExp("^(.+)$")); // "object"
console.log(typeof {}); // "object"
console.log(typeof new Object()); // "object"
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true - вот это неверно, Number.isNaN(undefined) - правильно и надежно)
console.log(isNaN(Infinity)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(Infinity)); // false
let x = NaN;
console.log(x == NaN); // false
console.log(x === NaN); // false
function isNan(value) {
  return value !== value;
}
console.groupEnd("#14 Operator");

// ** Array [Find the Index] #15
const findIndex = (arr, el) => {
  return arr.findIndex((item) => item === el);
};
console.info("#15 test findIndex", [
  findIndex(["hi", "edabit", "fgh", "abc"], "fgh"),
  findIndex(["Red", "blue", "Blue", "Green"], "blue"),
  findIndex(["a", "g", "y", "d"], "d"),
  findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"),
]);

// ** Array [Remove duplicates from an array of numbers/strings] #16
const uniqueValues = (arr) => {
  let unique = new Set(arr);
  return Array.from(unique);
};
console.info("#16 test uniqueValues", [uniqueValues([3, 1, 3, 5, 2, 4, 4, 4])]);

// ** Array [ A simple search (case-sensitive)] #17
const persons = [
  { id: 1, name: "Karl", age: 24, group: "editor" },
  { id: 2, name: "Poul", age: 32, group: "admin" },
  { id: 3, name: "John", age: 42, group: "editor" },
  { id: 4, name: "Mark", age: 26, group: "admin" },
];
const findAdminAr = (arr) => {
  // let result = [];
  // arr.forEach((obj) => {
  //   if (obj.group === "admin" && obj.name.includes("ar")) {
  //     result.push(obj.name);
  //   }
  // });
  let result;
  if (arr.length > 0) {
    result = arr.filter((e) => e.group === "admin" && e.name.includes("ar"));
  }
  return result;
};
console.info("#17 test persons", findAdminAr(persons));

// ** Array [Flattening an array of arrays] #18
const funFlat = (arr) => arr.flat();
// v. 2
const funFlat2 = (arr) => {
  return [].concat(...arr);
};
// v. 3
const funFlat3 = (arr) =>
  arr.reduce((prev, current) => prev.concat(current), []);

const nested = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.info("#18 test funFlat", [
  funFlat(nested),
  funFlat2(nested),
  funFlat3(nested),
]);

// ** Array [ Intersection A and B of arrays] #19
const getIntersection = (arrA, arrB) => {
  let result = [];
  const setB = new Set(arrB);
  arrA.forEach((e) => {
    if (setB.has(e)) {
      result.push(e);
    }
  });
  return result;
};
const arr1 = [7, 1, 77, 0, 4, 3, 2];
const arr2 = [13, 5, 2, 6, 7, 1];
console.info("#19 test getIntersection", getIntersection(arr1, arr2));

const getIntersection2 = (arrA, arrB) => {
  let result = arrA.filter((e) => arrB.find((el) => e === el));
  return result;
};
console.info("#19 test getIntersection2", getIntersection2(arr1, arr2));

console.log("typeof null", typeof null);
