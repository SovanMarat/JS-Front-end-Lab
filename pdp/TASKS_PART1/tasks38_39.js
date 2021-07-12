"use strict";

// [Array] - Filter out Strings from an Array #38
const filterArray = (arr) => arr.filter(elem => typeof elem === "number");

console.log([
    filterArray([1, 2, "a", "b"]), // ➞ [1, 2]
    filterArray([1, "a", "b", 0, 15]), // ➞ [1, 0, 15]
    filterArray([1, 2, "aasf", "1", "123", 123]), // ➞ [1, 2, 123]
]);

// [Loops] - Absolute Sum #39
const getAbsSum = (arrNum) => {
return arrNum.reduce((acc, elem) => acc+=Math.abs(elem), 0)
}

console.log([
    getAbsSum([2, -1, 4, 8, 10]), // ➞ 25
    getAbsSum([-3, -4, -10, -2, -3]), // ➞ 22
    getAbsSum([2, 4, 6, 8, 10]), // ➞ 30
    getAbsSum([-1]), // ➞ 1
])
