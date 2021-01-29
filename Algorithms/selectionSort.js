// Learn Selection Sort from here https://www.youtube.com/watch?v=9jwm_9lOHu0
// Find the min value in the array and swap it with the first value
// Then find 2nd min value and replace it with the 2nd element in the array
// So keep doing this until everything is in order
const selectionSort = (arr) => {
  // like in a bubble sort don't waste time with the last position
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // start with the position of  + 1 rather than 0 so we can make our comparison
    for (let j = i + 1; j < arr.length; j++) {
      // only do something if left value bigger than right
      // if you wanted to do a reverse sort you'd just change the "<" to ">"
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    // where we swap our left and right values
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
};

//
//
//
// Solution if you don't want to use a temporary variable
const selectionSort2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // cleaner way to flip things
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
};

const my_array = [1000, 100, 1, 2, 3, 4, 5, 300, 200];

/*
[
     1,   2,   3,   4,
     5, 100, 200, 300,
  1000
]
*/
console.log(selectionSort(my_array));
console.log(selectionSort2(my_array));
