const longestSubArraySum = (goal, arr) => {
  // default is to return -1 and say we can't reach the goal
  let result = [-1];
  let sum = 0;
  // left side of array
  let left = 0;
  // right side of array
  let right = 0;

  // review this video to understand why we have lefts and rights, https://www.youtube.com/watch?v=XFPHg5KjHoo
  // keep expanding the right side until we go over the goal them move left
  // it is reffered to as a sliding window approach
  while (right < arr.length) {
    sum += arr[right];
    while (left < right && sum > goal) {
      sum -= arr[left++];
    }
    if (
      sum === goal &&
      (result.length === 1 || result[1] - result[0] < right - left)
    ) {
      // Since arrays start at 0 we add 1
      result = [left + 1, right + 1];
    }
    right++;
  }
  return result;
};

my_array = [1, 2, 3, 4, 5];
my_array2 = [1, 20, 30, 4, 5];
my_array3 = [5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000];

// [ 1, 3 ] 1+2+3 = 6 (so those veyr positions in human terms whilst in arrays it'd be the index 0,1 & 2)
console.log(longestSubArraySum(6, my_array));
// result is -1 since we never can hit the goal
console.log(longestSubArraySum(999999, my_array));
//[ 3, 5 ] so 30 + 4 + 5
console.log(longestSubArraySum(39, my_array2));
// [ 3, 12 ] so we add a lot of 1s together to make 10
console.log(longestSubArraySum(10, my_array3));
