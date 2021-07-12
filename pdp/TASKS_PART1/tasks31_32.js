// "use strict";

// [Object] - How Good is Your Name? #31
const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

const msgResult = [
  { startScore: 0, endScore: 60, msg: "NOT TOO GOOD" },
  { startScore: 61, endScore: 300, msg: "PRETTY GOOD" },
  { startScore: 301, endScore: 599, msg: "VERY GOOD" },
  { startScore: 600, endScore: Infinity, msg: "THE BEST" },
];

const nameScore = (str) => {
  let score = str.split("").reduce((prev, next) => {
    for (const key in scores) {
      if (key === next) return prev + scores[key];
    }
  }, 0);
  return msgResult.find((e) => score >= e.startScore && score < e.endScore).msg;
};
console.log([
    nameScore("MUBASHIR"), // ➞ "THE BEST"
    nameScore("YOU"), // ➞ "VERY GOOD"
    nameScore("MATT"), // ➞ "THE BEST"
    nameScore("PUBG"), // ➞ "NOT TOO GOOD"
])

// [Object] - Distance Between Two Points #32
const getDistance = (a, b) =>
  Number(Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2).toFixed(3));
console.log('Distance Between Two Points', getDistance({ x: -2, y: 1 }, { x: 4, y: 3 }));
