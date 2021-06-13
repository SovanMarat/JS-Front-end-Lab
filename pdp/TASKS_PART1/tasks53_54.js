"use strict";

// Fix the Code: Un-Mutating an Array #53
let x = [3, 3, 3, 3, 3, 3, 3];

function change(x, times) {
  let copyX = [...x];
  for (let i = 0; i < copyX.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < copyX.length - j) {
        copyX[i]--;
      }
      j++;
    }
  }
  return copyX;
}

console.log([
  change(x, 0),  // [3, 3, 3, 3, 3, 3, 3]
  change(x, 1),  // [3, 2, 2, 2, 2, 2, 3]
  change(x, 2),  // [3, 2, 1, 1, 1, 2, 3]
  change(x, 3), // [3, 2, 1, 0, 1, 2, 3]
]);


// This #54
// Task #1
// Создайте объект calculator (калькулятор) с тремя методами:
const calculator = {
  read() {
    this.valueOne = Number(prompt("Введите первое число", 0)); //+prompt('a?', 0);
    this.valueTwo = Number(prompt("Введите второе число", 0)); //+prompt('b?', 0);
  },
  sum() {
    return this.valueOne + this.valueTwo;
  },
  mul() {
    return this.valueOne * this.valueTwo;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Task #2
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep(); // 1
