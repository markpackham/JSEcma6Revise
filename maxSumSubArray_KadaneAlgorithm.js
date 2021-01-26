// The Kadane Algorithm,
// What is the largest number you can get adding the values next to each other in the array together
// So keep adding stuff next to each other togther unless a massive negative number greatly reduces the total

// Need to refer to this video for a better explination, https://www.youtube.com/watch?v=jnoVtCKECmQ

// 12 is the answer
my_array = [1, 1, 2, 2, 3, 3];
// 192 is the answer we want
my_array2 = [1, 1, 2, 2, 90, 90, 3, 3, -10000, 101];
// 3 is the answer (1 + 2)
my_array3 = [-1000, -2000, 1, 2, -30000];
// 2 is the answer (2 + 0)
my_array4 = [-1000, -2000, 1, -30000, 2];
// 6 is the answer, here -1 isn't much of an issue so we keep on going
my_array5 = [4, -1, 2, 1];

const maxSumSubArray = (arr) => {
  max_sum = arr[0];
  current_sum = max_sum;
  // start at 1 not 0
  for (let i = 1; i < arr.length; i++) {
    current_sum = Math.max(arr[i] + current_sum, arr[i]);
    max_sum = Math.max(current_sum, max_sum);
  }
  return max_sum;
};

console.log(maxSumSubArray(my_array));
console.log(maxSumSubArray(my_array2));
console.log(maxSumSubArray(my_array3));
console.log(maxSumSubArray(my_array4));
console.log(maxSumSubArray(my_array5));
