// What Product of Array Except Self means
// So take the position of one element in the array and replace the value with EVERYTHING except it's self
// So [1,2,3] becomes [6,3,2]
// Essentially [(2*3),(1*3),(1*2)]

// Division is the easiest solution
const productOfArrayExceptSelf = (arr) => {
  const sum = arr.reduce((total, amount) => total + amount);
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
// Think of things in left total & right total of array index position multiplied together
// Since division is not used you don't need to bother with rounding
const productOfArrayExceptSelf2 = (arr) => {};

my_array = [1, 2, 3, 4, 5];

// without round [ 15, 7.5, 5, 3.75, 3 ]
// with round for rounding, [ 15, 8, 5, 4, 3 ]
console.log(productOfArrayExceptSelf(my_array));
console.log(productOfArrayExceptSelf2(my_array));
