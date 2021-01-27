// Look for a value in two arrays and see if you can reach the goal you've set
const sumOfTwoArraysGoal = (arr1, arr2, goal) => {
  mySet = new Set();

  // Go through everything in the first array, subtract their values from the goal
  // Add the results to the Set of unique values
  for (let i = 0; i < arr1.length; i++) {
    // get the difference between the goal and the current index's value
    let diff = goal - arr1[i];
    mySet.add(diff);
  }

  // Check the 2nd array to see if it contains any values in my Set which is what we need to reach the goal
  for (let i = 0; i < arr2.length; i++) {
    if (mySet.has(arr2[i])) {
      return true;
    }
  }
  return false;
};

my_array = [1, 2, 3];
my_array2 = [4, 5, 6];

// true - You can reach the goal by adding the two last array values 3 + 6
console.log(sumOfTwoArraysGoal(my_array, my_array2, 9));
// false - You cannot reach the goal none of the values in the arrays will help us
console.log(sumOfTwoArraysGoal(my_array, my_array2, 1000000));
