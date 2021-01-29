// node fizzBuzz.js
my_array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const fizzBuzz = (arr) => {
  let output = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      output += "Fizz";
    } else if (arr[i] % 5 === 0) {
      output += "Buzz";
    } else {
      output += " " + arr[i].toString() + " ";
    }
  }

  return output;
};

// output,  2 Fizz 4 BuzzFizz 7  8 FizzBuzz 11 Fizz 13  14 Fizz
console.log(fizzBuzz(my_array));
