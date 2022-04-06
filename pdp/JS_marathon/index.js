// #1
const meeting = list => {
  let numberRoom = list.findIndex(room => room === 'O');
  return numberRoom === -1 ? 'None available!' : numberRoom;
};

// console.log(meeting(['X', 'O', 'X'])); // 1
// console.log(meeting(['O', 'X', 'X', 'X', 'X'])); // 0
// console.log(meeting(['X', 'X', 'X', 'X', 'X'])); // 'None available!'

// #2
let input = {
  1: ['C', 'F', 'G'],
  5: ['A', 'B', 'C'],
  2: ['A', 'A', 'A'],
  3: ['B', 'R', 'B'],
};

const sortTable = arr => {
  return [...arr].sort((a, b) => b[0] - a[0]);
};

const uniqSymbolTable = input => {
  let inputClone = JSON.parse(JSON.stringify(input));
  let arrClone = Object.entries(inputClone);
  let sortTableArr = sortTable(arrClone);

  sortTableArr.forEach((el, i) => {
    el[1].forEach(e => compare(e, i, sortTableArr));
  });
  return createUniqElObj(sortTableArr, inputClone);
};

const compare = (element, i, arr) => {
  for (let j = i + 1; j < arr.length; j++) {
    compare2(arr[j][1], element);
  }
};

const compare2 = (arr, e) => {
  arr.forEach((el, i) => {
    if (e === el) {
      arr[i] = 0;
    }
  });
};

const clearArr = arr => {
  const result = [];
  arr.forEach(e => {
    if (e !== 0) {
      result.push(e);
    }
  });
  return result;
};

const createUniqElObj = (arr, table) => {
  let objResult = {};

  for (let key of Object.keys(table)) {
    objResult[key] = clearArr(arr.find(e => key === e[0])[1]);
  }
  return objResult;
};

console.log(uniqSymbolTable(input));


// #3
