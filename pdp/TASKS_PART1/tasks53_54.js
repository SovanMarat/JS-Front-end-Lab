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


// ** This #54

// This имеет разные значения в зависимости от того, где он используется:
//  - В методе this относится к объекту-владельцу.
//  - Один this относится к глобальному объекту.
//  - В функции this относится к глобальному объекту.
//  - В функции в строгом режиме this есть undefined.
//  - В событии this относится к элементу, получившему событие.
//  - Такие методы, как call(), и apply() могут относиться this к любому объекту.

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

// free work - bind, call, apply

// Для того, чтобы при вызове функции установить this в определённое значение, используйте call() или apply()

const student = {
    name: "student",
    sayHi() {
        console.log(`Hi, ${this.name}`)
    }
};

const marat = {
    name: 'Marat',
};

    student.sayHi(),
    student.sayHi.bind(marat)(); // создает функцию, необходимо вызвать
    student.sayHi.call(marat); // сразу вызывается, через запятую пробрасываем параметры
    student.sayHi.apply(marat); // сразу вызывается, параметры пробрасываем в виде массива



