// What Product of Array Except Self means
// So take the position of one element in the array and replace the value with EVERYTHING except it's self
// So [1,2,3] becomes [6,3,2]
// Essentially [(2*3),(1*3),(1*2)]

// Division is the easiest solution
const productOfArrayExceptSelf = (arr) => {
  const sum = arr.reduce((total, amount) => total * amount);
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // round upwards so we deal with Ints not Floats
    newArr.push(Math.round(sum / arr[i]));
  }
  return newArr;
};

//
//
//
// Solution if Division forbidden
// Since division is not used you don't need to bother with rounding
// Refer to this for detailed explination https://youtu.be/khTiTSZ5QZY?t=515
const productOfArrayExceptSelf2 = (arr) => {
  const position = arr.length;

  let output = [position];
  output[0] = 1;

  // Calculate all values left of the current array position
  for (let i = 1; i < position; i++) {
    output[i] = arr[i - 1] * output[i - 1];
  }

  let rightSide = 1;
  // Calculate all values right of the current array position and update total
  for (let i = position - 1; i >= 0; i--) {
    output[i] = output[i] * rightSide;
    rightSide = rightSide * arr[i];
  }

  return output;
};

my_array = [1, 2, 3, 4, 5];

// Answer, [ 120, 60, 40, 30, 24 ]
console.log(productOfArrayExceptSelf(my_array));
console.log(productOfArrayExceptSelf2(my_array));
