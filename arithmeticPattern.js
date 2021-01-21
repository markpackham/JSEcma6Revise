// node arithmeticPattern.js
my_array = [5, 10, 15, 20, 25];
my_array2 = [5, 10, 15, 20, 25999];

const testArithmetic = (arr) => {
  answer = "Arithmetic pattern";

  diffMaker = arr[1] - arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] == diffMaker) {
    } else {
      answer = "Not arithmetic pattern";
    }
  }
  return answer;
};

console.log(testArithmetic(my_array));
console.log(testArithmetic(my_array2));
