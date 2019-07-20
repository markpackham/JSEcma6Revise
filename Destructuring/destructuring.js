// Array/Object Destructuring is only possible in ES6

// Array Destructuring
const alpha = ["A", "B", "C", "D", "E", "F"];
const num = ["1", "2", "3", "4", "5", "6"];

// const a = alpha[0]; // Gives A
// const b = alpha[1]; // Gives B

const [a, , c, ...rest] = alpha;
console.log(a);
console.log(c);
console.log(rest);
/*
A
C
[ 'D', 'E', 'F' ]
[ 'A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6' ]
*/

const newArray = [...alpha, ...num]; // works like alpha.concat(numbers)
console.log(newArray);

function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

// we can set defaults
const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
console.log(division);

//
//
// Object Destructuring
//
const person1 = {
  name: "Bob",
  age: 11,
  address: {
    city: "London",
    country: "England"
  }
};

const person2 = {
  name: "Greg",
  favFood: "Ham",
  age: 22,
  address: {
    city: "Paris",
    country: "France"
  },
  notInPerson2: "I do not exist in Person 2"
};

const { name: firstName, age, favFood = "Beans" } = person2; // map firstName to name
console.log(firstName);
console.log(age);
console.log(favFood);

const {
  name: firstName2,
  address: { city },
  ...rest2
} = person2; // map firstName to name
console.log(city); // gives Paris
console.log(rest2);
/*
{ favFood: 'Ham',
  age: 22,
  notInPerson2: 'I do not exist in Perosn 2' }
*/

// override everything in person 1 with 2
const personThree = { ...person1, ...person2 };
console.log(personThree);
/*
{ name: 'Greg',
  age: 22,
  address: { city: 'Paris', country: 'France' },
  favFood: 'Ham',
  notInPerson2: 'I do not exist in Person 2' }
  */

// React heavily uses Object Destructuring in its calls
function printUser({ name, age, favFood = "Cheese" }) {
  console.log(`Name is: ${name}. Age is ${age}. Fav food is ${favFood}`);
}

printUser(person1);
// Name is: Bob. Age is 11. Fav food is Cheese
