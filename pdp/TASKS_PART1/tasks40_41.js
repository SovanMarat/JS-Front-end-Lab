"use strict";

// [Loops] - Reverse the Case #40
const reverseCase = str => {
  let result = str.split("").map((elem) => {
    if (elem === elem.toUpperCase()) {
      return elem.toLowerCase();
    } else {
      return elem.toUpperCase();
    }
  });
  return result.join("");
};

console.log('[Loops] - Reverse the Case #40', [
  reverseCase("Happy Birthday"), // ➞ "hAPPY bIRTHDAY"
  reverseCase("MANY THANKS"), // ➞ "many thanks"
  reverseCase("sPoNtAnEoUs"), // ➞ "SpOnTaNeOuS"
]);

// [Switch/case] - Flick Switch #41
const flickSwitch = arr => {
  let currentValue = true;
  let result = arr.map((elem) => {
    if (elem === "flick") {
      currentValue = !currentValue;
    }
    return currentValue;
  });
  return result;
};

console.log('[Switch/case] - Flick Switch #41', [
  flickSwitch(["edabit", "flick", "eda", "bit"]), // ➞ [true, false, false, false]
  flickSwitch(["flick", 11037, 3.14, 53]), // ➞ [false, false, false, false]
  flickSwitch([false, false, "flick", "sheep", "flick"]), // ➞ [true, true, false, false, true]
]);
