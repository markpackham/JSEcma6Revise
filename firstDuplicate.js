my_array = [1, 2, 3, 4, 5];
my_array2 = [1, 1, 3, 4, 5];
my_array3 = [1, 2, 2, 5, 5];

const firstDuplicates = (arr) => {
  // Set stores unique values only, prevents duplicates
  let mySet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      // Don't bother carrying on when we found the first duplicate
      return arr[i];
    } else {
      mySet.add(arr[i]);
    }
  }
  return "There are no duplicates";
};

// "There are no duplicates"
console.log(firstDuplicates(my_array));
// First duplicate 1,1
console.log(firstDuplicates(my_array2));
// First duplicates 2,2 (so 5,5 is ignored)
console.log(firstDuplicates(my_array3));
