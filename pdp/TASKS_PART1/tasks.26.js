"use strict";

// [Date] - Work with date #26

// task -1
// Выведите на экран текущие день, месяц, год и текущий знак зодиака в формате 'год-месяц-день (знак зодиака)'.
let currentDate = new Date();

class DateZodiak {
  constructor(mounth, day) {
    this.mounth = mounth;
    this.day = day;
  }
}
class Zodiak {
  constructor(name, start, end) {
    this.name = name;
    this.start = start;
    this.end = end;
  }
}

const arrZnaki = [
  new Zodiak("oven", new DateZodiak(3, 21), new DateZodiak(4, 20)),
  new Zodiak("telec", new DateZodiak(4, 21), new DateZodiak(5, 20)),
  new Zodiak("bliznec", new DateZodiak(5, 21), new DateZodiak(6, 21)),
  new Zodiak("rak", new DateZodiak(6, 22), new DateZodiak(7, 22)),
  new Zodiak("lev", new DateZodiak(7, 23), new DateZodiak(8, 22)),
  new Zodiak("deva", new DateZodiak(8, 23), new DateZodiak(9, 22)),
  new Zodiak("vesy", new DateZodiak(9, 23), new DateZodiak(10, 22)),
  new Zodiak("scorpion", new DateZodiak(10, 23), new DateZodiak(11, 21)),
  new Zodiak("strelec", new DateZodiak(11, 22), new DateZodiak(12, 20)),
  new Zodiak("kozerog", new DateZodiak(12, 21), new DateZodiak(1, 19)),
  new Zodiak("vodolej", new DateZodiak(1, 20), new DateZodiak(2, 19)),
  new Zodiak("riby", new DateZodiak(2, 20), new DateZodiak(3, 20)),
];

const getZodiak = (m, d) => {
  const result = arrZnaki.find(
    (e) =>
      (e.start.mounth === m && e.start.day >= d) ||
      (e.end.mounth === m && e.end.day >= d)
  );
  return result.name;
};

console.log(
  `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()} (${getZodiak(
    currentDate.getMonth()+1,
    currentDate.getDate()
  )})`
);

// task - 2
// Выведите на экран текущий месяц словом, на английском (полностью)
let currentMouth = new Date().getMonth();

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

console.log('mounth:', months[currentMouth]);

// task - 3
// Выведите на экран количество секунд с начала дня до настоящего момента времени.
let currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
console.log(Math.round((currentDate.getTime()-currentDay.getTime())/1000));