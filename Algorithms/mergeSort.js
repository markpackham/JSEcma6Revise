// Study Merge Sort from https://www.youtube.com/watch?v=x_Z9FcAPmbk
// Simular to Quick Sort, uses divide and conquer (left/right) with recursion
// It is a fast but complex algorithm with technical jargon

// Split our array in two then keep spliting until you get a single element array
// You then compare all the arrays next to each other.
// [1,2,3,6,5,4]
// [1,2,3] [6,5,4]
// [1,2] [3] [6,5] [4]
// [1] [2] [3] [6] [5] [4]
// Then start sorting and recreating the arrays

// leftArr & rightArr are sorted
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // keep running till there are no more elements to compare
  // it's entirely possible we have to do less work on one array vs the other
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  // it's possible "...leftArr.slice(leftIndex)" or the right version might give us nothing, but that's fine
  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

const mergeSort = (arr) => {
  // our edge case
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  // recursion happens here
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

// test merge function on it's own
// [ 1, 2, 9, 10 ]
console.log(merge([1, 10], [2, 9]));

const my_array = [5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 900, 800, 700];
const my_array2 = [9, 8, 7, 6, 5];
/*
[
    1, 1, 2, 2,   3,   3,
    4, 4, 5, 5, 700, 800,
  900
]
*/
console.log(mergeSort(my_array));
// [ 5, 6, 7, 8, 9 ]
console.log(mergeSort(my_array2));
