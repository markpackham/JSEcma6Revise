// Learned from here https://www.youtube.com/watch?v=P6XGSKO2RzI
// Best explination behind theory, https://www.youtube.com/watch?v=XE4VP_8Y0BU
// with selection of the pivot being the key
// RECURSION is used!!!!
// This algorithm is fast but hard to understand
function quickSort(arr) {
  // edge case to avoid us wasting time on an array with only one value
  if (arr.length <= 1) {
    return arr;
  }

  // we normally use the last element for our pivot
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    // it's possible to empty left or right arrays depending on if our pivot is the biggest or smallest number
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push[arr[i]];
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const my_array = [1, 2, 3, 4, 10, 9, 2, 2, 2, 8, 7];

console.log(quickSort(my_array));
