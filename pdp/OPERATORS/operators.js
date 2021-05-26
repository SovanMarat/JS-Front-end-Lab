"use strict";

console.time("leadTime");
console.log("operators", [
  2 + 1 + "1", // 41
  4 - "1", // 3
  "6" / "3", // 2
  +true, // 1 (приведение к числу унарным оператором)
  +"2", // 2 (приведение к числу унарным оператором)
  "" + 1 + 0, // "10"
  "" - 1 + 0, // -1
  true + false, // 1
  4 + 5 + "px", //  "9px"
  "$" + 4 + 5, // = "$45"
  "4px" - 2, // NaN
  7 / 0, // = Infinity
  "  -9  " + 5, // "  -9  5"
  "  -9  " - 5, // -14
  null + 1, // 1
  undefined + 1, // NaN
  " \t \n" - 2, // -2
]);
console.timeEnd("leadTime");

const obj1 = {
  test1: "1",
  test2: 2,
};
const obj2 = {
  test3: "3",
  test4: true,
};
console.info("test console.info", [obj1, obj2]);

console.group("group1");
console.log("part1");
console.log("part2");
console.log("part3");
console.groupEnd("group1");

window.onclick = () => {
  console.clear();
};
