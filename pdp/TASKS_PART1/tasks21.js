"use strict";

// ** Array [JS Array Methods / forEach / filter / map / sort / reduce] (part.1) #21

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 2000, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1970, end: 1989 },
];

const members = [
  { name: "James", speciality: "Finance" },
  { name: "Richard", speciality: "Retail" },
  { name: "Thomas", speciality: "Auto" },
  { name: "Charles", speciality: "Retail" },
  { name: "Matthew", speciality: "Technology" },
  { name: "Donald", speciality: "Finance" },
  { name: "Andrew", speciality: "Auto" },
  { name: "Kevin", speciality: "Technology" },
  { name: "Edward", speciality: "Retail" },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// * for i *
// Перебрать массив companies, в консоли вывести самую старшую компанию
let min = companies[0].start;
let minIndex = 0;
for (let i = 1; i < companies.length; i++) {
  if (companies[i].start < min) {
    min = companies[i].start;
    minIndex = i;
  }
}
console.log("oldest company:", companies[minIndex].name);

// Перебрать массив companies, в консоли вывести список компании которые начали работать после 2000 (не включая 2000)

// console.log(companies.filter(i=>i.start>2000));  - намного проще фильтром пробежаться)
let arr2001 = [];
for (let i = 1; i < companies.length; i++) {
  if (companies[i].start > 2000) {
    arr2001.push(companies[i]);
  }
}
console.log(arr2001);

// Перебрать массив ages, в консоли вывести новый массив, который будет включать в себя числа в соответствии условию ( >= 21 )

let arr21 = [];
for (let i = 1; i < ages.length; i++) {
  if (ages[i] >= 21) {
    arr21.push(ages[i]);
  }
}
console.log(arr21);

// [forEach]

// вывести в консоли просто список компаний (из массива - companies)
let listCompany = [];
companies.forEach((e) => listCompany.push(e.name));
// console.log (e);
console.log({ listCompany });

// вывести в консоли просто список компаний которые начали работать с 1987 (включительно / из массива - companies)
let arr1987 = [];
companies.forEach((e) => {
  if (e.start >= 1087) arr1987.push(e.name);
});
console.log({ arr1987 });

// [filter]

// Из массива companies найти все компании у которых category = Technology
console.log(companies.filter((i) => i.category === "Technology"));

// В массива members найти всех персон чье имя начинается на 'K' и со специальностью = Technology
console.log(
  members.filter((i) => i.speciality === "Technology" && i.name[0] === "K")
);

// [map]

// вернуть новый массив с информацией о компани + информацией сколько лет компания уже не работает на рынке, на период настоящего времени
let companiesPlusNotWork = companies.map((e) => {
  let currentYear = new Date().getFullYear();
  e.notWork = currentYear - e.end;
  return e;
});
console.log({ companiesPlusNotWork });

// Объеденить два массива companies и members в один, по общему значению в пропертях speciality и Technology

let concatenatedArrayTemp = companies.map((e) => {
  console.log(e.category);
  let indexIntersection = members.findIndex(
    (spec) => !spec.work && spec.speciality === e.category
  );
  if (indexIntersection > -1) {
    e.member = members[indexIntersection];
    members[indexIntersection].work = true;
  }
  return e;
});
let concatenatedArray = concatenatedArrayTemp.map((e) => {
  delete e.member.work;
  return e;
});

console.log({ concatenatedArray });

// [sort]

// Сортировать массив companies по алфавиту а-я - по свойству name
companies.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
});
console.log(companies);

// Сортировать массив members по алфавиту обратный порядок я-а - по свойству name
members.sort((a, b) => {
  if (a.name > b.name) return -1;
  if (a.name < b.name) return 1;
});
console.log(members);

// Просто отсортировать массив по возрастанию ages
console.log(ages.sort((a, b) => a - b));

// [reduce]

// вернуть список сотрудников, которые могли бы работать в комнаниях -
// Company One, Company Two, Company Three, Company Four
// (в соответствии с их специальностью)

let arrCompanies = [
  "Company One",
  "Company Two",
  "Company Three",
  "Company Four",
];

const getListMembers = () => {
  let list = [];
  arrCompanies.reduce((prev, current) => {
    let currentCompany = companies.find((e) => e.name === current);
    return list.push({
      Company: currentCompany.name,
      members: members.filter((e) => e.speciality === currentCompany.category),
    });
  }, []);
  return list;
};
console.log("getListMembers:", getListMembers());
