// const obj = { first: "James", last: "Baker", alias: "JB" };
const obj = { last: "Baker", alias: "JB" };

// let { first = "Ivan", last = "Klimm", alias } = obj; //  Деструктурирующее присваивание с установкой значений по умолчанию
// console.log(first, last, alias);

//  Деструктурирующее присваивание с изменением имени ключа (first -> nickname ) + установка значений переменных по умолчанию
let { first: nickname = "Marat", last = "Sovan", alias } = obj;
console.log(nickname, last, alias);
