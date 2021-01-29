// keep swaping items to the left till the value on your left is smaller than your current value
// Need to refer to this, it's more confusing than the bubble or selection sort, https://www.youtube.com/watch?v=Q_U71D3U23M
const insertionSort = (arr) => {
  // do not start at position 0 or there is nothing to make a comparison against on your left
  for (let i = 1; i < arr.length; i++) {
    // this moves from right to left
    for (let j = i; j > 0; j--) {
      // if j is less than the previous entry do the swap
      if (arr[j] < arr[j - 1]) {
        // left/right swap occurs
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }

  return arr;
};

const my_array = [1, 2, 3, 6, 5, 4, 7, 8, 9, 12, 11, 10];
/*
[
   1,  2, 3, 4,  5,
   6,  7, 8, 9, 10,
  11, 12
]
*/
console.log(insertionSort(my_array));
