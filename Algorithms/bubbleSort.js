// Learn of the Bubble Sort from here, https://www.youtube.com/watch?v=IAeLoGzU4RE

// This is the slow solution due to nested for loops
const bubbleSort = (arr) => {
  // use arr.length -1 so we don't waste time comparing the last value
  for (let i = 0; i < arr.length - 1; i++) {
    // don't bother comparing last value so arr.length -1 -i
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // only do a swap if value on left greater than value on right
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

//
//
//
// Version not using a variable but arrays
const bubbleSort2 = (arr) => {
  // use arr.length -1 so we don't waste time comparing the last value
  for (let i = 0; i < arr.length - 1; i++) {
    // don't bother comparing last value so arr.length -1 -i
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // get left and right to swap sides
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

const my_array = [1, 2, 3, 10, 9, 8, -100, -200, -300];
/*
[
  -300, -200, -100, 1,
     2,    3,    8, 9,
    10
]
*/
console.log(bubbleSort(my_array));
console.log(bubbleSort2(my_array));
