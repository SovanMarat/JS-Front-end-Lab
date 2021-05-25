"use strict";

// 7 примитивных типов: string, number, boolean, symbol, null, undefined и bigint
// и объект

// В интерпретаторе JavaScript есть фоновый процесс, который называется сборщик мусора.
// Он следит за всеми объектами и удаляет те, которые стали недостижимы (т.е. у которых нету входящей ссылки от корня).

// *Number*
console.log(1e3 === 1 * 1000);
console.log(1e-6 === 0.000001);

let num = 255;
console.log(num.toString(16)); // result: ff (возвращает строковое представление числа num в системе счисления - 16)

// Объект Math является встроенным объектом, хранящим в своих свойствах и методах различные математические константы и функции
console.log(Math.PI);
console.log(Math.max(1, 2, 3, 4));

// Math.floor - Округление в меньшую сторону
// Math.ceil - Округление в большую сторону
// Math.round - Округление до ближайшего целого
// Math.abs - модуль числа

const sameBigint = BigInt("1234567890123456789012345678901234567890");
console.log(sameBigint);

// Число хранится в памяти в бинарной форме
let sum = 0.1 + 0.2;
console.log(sum.toFixed(2));

// *String*

// str.indexOf(substr, pos)
// str.lastIndexOf(substr, position) - ищет с конца
// str.includes(substr, pos)
// str.substr(start [, length])
// str.codePointAt(pos) - Возвращает код для символа, находящегося на позиции pos
// String.fromCodePoint(code) - Создаёт символ по его коду code
// str.trim() — убирает пробелы в начале и конце строки.
// str.repeat(n) — повторяет строку n раз.

console.log("*String*", [
  "Interface".toUpperCase(), // INTERFACE
  "Interface".toLowerCase(), // interface
  "Interface"[2], // t
  "Widget with id".indexOf("with"), // 7
  "Widget with id".indexOf("id"), // 1
  "Widget with id".indexOf("id", 2), // 12
  "Widget with id".includes("Widget"), // true
  "stringify".slice(0, 5), // strin
  "stringify".slice(2), // ringify
  "stringify".substring(2, 6), // ring
  "stringify".substring(6, 2), // ring
  "a" < "b", // true (сравниваются посимвольно в алфавитном порядке)
  "a" > "Z", // true (Все строчные буквы идут после заглавных, так как их коды больше)
  " stringify ".trim(), // "stringify"
]);

const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);
console.log(ucFirst("вася"));

// *Date*
// Счёт месяцев, дней недели начинается с нуля
// setDate(date) - установка

let currentDate = new Date();
console.log("*Date*", [
  currentDate.getFullYear(), // 2021
  currentDate.getMonth(), // 4
  currentDate.getDate(), // 25
  currentDate.getHours(), // 20
  currentDate.getMinutes(), // 21
  currentDate.getSeconds(), // 49
  currentDate.getMilliseconds(), // 787
  currentDate.getDay(), // 2    (0 - воскресенье, 6 - суббота)
]);

let start = Date.now(); // количество миллисекунд с 1 января 1970 года (таймстамп)
let ms = Date.parse("2012-01-26T13:51:50.417-07:00"); // строку в таймстамп
console.log(ms); // 1327611110417 (таймстамп)

// *RegEx*
// Регулярные выражения - это шаблоны, используемые для сопоставления последовательностей символов в строках.

// regexp = new RegExp("шаблон", "флаги");
// regexp = /шаблон/gmi; - статика

// Метод str.match(regexp) ищет совпадения: все, если есть флаг g, иначе только первое.
// Метод str.replace(regexp, replacement) заменяет совпадения с regexp на replacement: все, если у регулярного выражения есть флаг g, иначе только первое.
// Метод regexp.test(str) возвращает true, если есть хоть одно совпадение, иначе false.

console.log("*RegEx*", [
  "Любо, братцы, любо!".match(/любо/gi), // Любо,любо (массив из 2х подстрок-совпадений)
  "We will, we will".replace(/we/gi, "I"), // I will, I will
  /люблю/i.test("Я ЛюБлЮ JavaScript"), // true
]);

// *Boolean*
console.log("*Boolean*", [
    Boolean(0),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN),
    Boolean(""),
    Boolean(" "), // всё остальное true
    Boolean("0"), // true
])

// *String, Number*
console.log("*String, Number*", [
    String(123),
    Number("123"),
    Number(true), // 1
    Number(false),  // 0
    Number(undefined),  // Nan
    Number(null),  // 0
])

// *typeof*
console.log('*typeof*', [
typeof undefined, // "undefined"
typeof 0, // "number"
typeof 10n, // "bigint"
typeof true, // "boolean"
typeof "foo", // "string"
typeof Symbol("id"), // "symbol"
typeof Math, // "object"
typeof null, // "object"
typeof alert, // "function"
]);