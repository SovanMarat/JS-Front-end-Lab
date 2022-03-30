const arr = [101, 1, 2, 1, 22, 9, 11, 53, 9, 34];

const mySortNumber = arr => [...arr].sort((a, b) => a - b); // sort numbers
const mySortStr = arr => [...arr].sort(); // sort str

const compare = (a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
};

const mySortNumber2 = arr => [...arr].sort((a, b) => compare(a, b)); // sort numbers2 use compare function
console.log(mySortNumber2(arr));
console.log(arr);

// sort BUbble - O(n^2);

const sortBubble = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // let a = arr[j];
        // arr[j] = arr[i];
        // arr[i] = a;
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
};

console.log('sortBubble', sortBubble(arr));

//
