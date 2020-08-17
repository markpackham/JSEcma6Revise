// Revise ternary operators from https://www.youtube.com/watch?v=70GmtV-5Ggo
const number = 50;
let result;

// if (number >= 50) {
//   result = "Greater than or equal to 50";
// } else {
//   result = "Not greater than and not equal to 50";
// }

result =
  number >= 50
    ? "Greater than or equal to 50"
    : "Not greater than not equal to 50";

console.log(result);
