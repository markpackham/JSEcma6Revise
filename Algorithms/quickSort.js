// Learned from here https://www.youtube.com/watch?v=P6XGSKO2RzI
// Best explination behind theory, https://www.youtube.com/watch?v=XE4VP_8Y0BU
// with selection of the pivot being the key
// RECURSION is used!!!!
// This algorithm is fast but hard to understand
const quickSort = (arr) => {
  // edge case to avoid us wasting time on an array with only one or 0 values
  if (arr.length <= 1) {
    return arr;
  }

  // we normally use the last element for our pivot
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  // add things to the left or right arrays based off the pivot
  for (const i of arr.slice(0, arr.length - 1)) {
    i < pivot ? leftArr.push(i) : rightArr.push(i);
  }

  // recursion occurs here
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const my_array = [1, 2, 3, 4, 10, 9, 2, 2, 2, 8, 7, 7000, 3];

/*
[
  1,  2,    2, 2, 2,
  3,  3,    4, 7, 8,
  9, 10, 7000
]
*/
console.log(quickSort(my_array));
