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

// WHEN TO NEVER USE A TERNARY
// Never user ternary in this example, only use it when returning somehting or code looks confusing
// const user = {}
// user.valid ? user.save() : user.printErrors()

// // looks much more sensible and explicit
// if(user.valid){
//     user.save()
// }else{
//     user/valid ? user.save() : user.printErrors()
// }

if (number === 0) {
  result = "Number is 0";
} else if (number < 10) {
  result = "Number is less than 10";
} else {
  result = "Number is more than 9";
}
console.log(result);

// Avoid nested ternaries, they can be very hard to read
result =
  number === 0
    ? "Number is 0"
    : number < 10
    ? "Number is less than 10"
    : "Number is more than 9";

console.log(
  result + " but you got the reuslt from an evil nested ternary, shame on you!"
);
