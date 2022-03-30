console.log('start');

// #1
const meeting = list => {
  let numberRoom = list.findIndex(room => room === 'O');
  return numberRoom === -1 ? 'None available!' : numberRoom;
};

console.log(meeting(['X', 'O', 'X'])); // 1
console.log(meeting(['O', 'X', 'X', 'X', 'X'])); // 0
console.log(meeting(['X', 'X', 'X', 'X', 'X'])); // 'None available!'


// #2
