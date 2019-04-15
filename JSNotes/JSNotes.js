//If, Else If, Else
let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

//Switch
let athleteFinalPosition = "first place";

switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

//Comparison Operators
/*
    Less than: <
    Greater than: >
    Less than or equal to: <=
    Greater than or equal to: >=
    Is equal to: ===
    Is NOT equal to: !==
*/
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

//Logical Operators
/*
    the and operator (&&)
    the or operator (||)
    the not operator, otherwise known as the bang operator (!)
*/
let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}

/*
The list of falsy values includes:

    0
    Empty strings like "" or ''
    null which represent when there is no value at all
    undefined which represent when a declared variable lacks a value
    NaN, or Not a Number
*/

//Truthy and Falsy Assignment
let tool = "";

tool = "marker";

// If tool is false/null then make it 'pen'
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);

//Ternary Operator
let isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let isCorrect = true;

isCorrect ? console.log("Correct!") : console.log("Incorrect!");

let favoritePhrase = "Love That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");

/*
    An if statement checks a condition and will execute a task if that condition evaluates to true.
    if...else statements make binary decisions and execute different code blocks based on a provided condition.
    We can add more conditions using else if statements.
    Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
    The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
    The logical operator ||, or “or”, checks if either provided expression is truthy.
    The bang operator, !, switches the truthiness and falsiness of a value.
    The ternary operator is shorthand to simplify concise if...else statements.
    A switch statement can be used to simplify the process of writing multiple else if statements. 
    The break keyword stops the remaining cases from being checked and executed in a switch statement.
*/

//Default Parameters
//the defaults will show if no arguments are passed to override them
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//Return (functions by default return "undefined")
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

/*
Helper Functions
We can also use the return value of a function inside another function. 
These functions being called within another function are often referred to as helper functions. 
Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.
*/
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//Function Expressions
/*
Another way to define a function is to use a function expression. 
To define a function inside an expression, we can use the function keyword. In a function expression, 
the function name is usually omitted. A function with no name is called an anonymous function.
*/
const plantNeedsWater = function(day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater("Tuesday");

console.log(plantNeedsWater("Tuesday"));

//Arrow Function (what cool ES6 kids use)
const plantNeedsWater = day => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

//Refactored Arrow Functions
/*
Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. 
However, if a function takes zero or multiple parameters, parentheses are required.
showcasing how arrow functions parameters differ for different amounts of parameters
A function body composed of a single-line block does not need curly braces. Without the curly braces, 
whatever that line evaluates will be automatically returned. The contents of the block should immediately 
follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
*/
const plantNeedsWater = day => (day === "Wednesday" ? true : false);

/*
A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

A function declaration :

Diagram showing the syntax of a function declaration
A parameter is a named variable inside a function’s block which will be assigned the value of the argument 
passed in when the function is invoked:

JavaScript syntax for declaring a function with parameters
To call a function in your code:

Diagram showing the syntax of invoking a function
ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign 
a default value to a parameter in case no argument is passed into the function.

To return a value from a function, we use a return statement.

To define a function using function expressions:

defining a function expression
To define a function using arrow function notation: alt
Function definition can be made concise using concise arrow notation:
*/

//Block Scope
//A block is the code found inside a set of curly braces {}
const city = "New York City";

const logCitySkyline = () => {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
};
//Another Block scope example
const logVisibleLightWaves = () => {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
};
logVisibleLightWaves();
console.log(logCitySkyline());

//Global Scope example (access from anywhere)
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

const callMyNightSky = () => {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
};
console.log(callMyNightSky());
//Night Sky: The Moon, North Star, and The Milky Way

/*
Scope Pollution
When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. 
These variables remain there until the program finishes which means our global namespace can fill up really quickly.
Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.
Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents.
*/

/*
Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
Blocks are statements that exist within curly braces {}.
Global scope refers to the context within which variables are accessible to every part of the program.
Global variables are variables that exist within global scope.
Block scope refers to the context within which variables that are accessible only within the block they are defined.
Local variables are variables that exist within block scope.
Global namespace is the space in our code that contains globally scoped information.
Scope pollution is when too many variables exist in a namespace or variable names are reused.
*/

//Update array
//Change the second element of the array groceryList to 'avocados'.
let groceryList = ["bread", "tomatoes", "milk"];
groceryList[1] = "avocados";

//Array .length returns the number of items in the array
const objectives = ["Learn a new languages", "Read 52 books", "Run a marathon"];
console.log(objectives.length);
//gives 3

//.push() allows us to add items to the end of an array
const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("cook dinner", "mop floor");
console.log(chores);

//.pop(), removes the last item of an array.
const chores = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor"
];
chores.pop();
console.log(chores);

//.slice, .indexOf
const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains"
];
//.shift() method to remove the first item from the array
groceryList.shift();
console.log(groceryList);
//use the .unshift() method to add 'popcorn' to the beginning of your grocery list
groceryList.unshift("popcorn");
console.log(groceryList);
//'bananas', 'coffee beans', and 'brown rice'. use .slice() to provide a list of these three things
console.log(groceryList.slice(1, 4));
console.log(groceryList);
//find the index of the element 'pasta'
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

//Nested Array example
const numberClusters = [[1, 2], [3, 4], [5, 6]];
//We want to grab the number "6" so we for target so we do
const target = numberClusters[2][1];

/*
Arrays are lists that store data in JavaScript.
Arrays are created with brackets [].
Each item inside of an array is at a numbered position, or index, starting at 0.
We can access one item in an array using its index, with syntax like: myArray[0].
We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
Arrays have a length property, which allows you to see how many items are in an array.
Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. 
However, a variable declared with const cannot be reassigned.
Arrays mutated inside of a function will keep that change even outside the function.
Arrays can be nested inside other arrays.
To access elements in nested arrays chain indices using bracket notation.
*/

//Loops are pretty much the same in most languages
//For Loop
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}
//For Loop in reverse
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

//Array Looping
const vacationSpots = ["Bali", "Paris", "Tulum"];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

//Nested Loop
let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
let tinasFollowers = ["Sam", "Marta", "Elle"];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

//While loop
const cards = ["diamond", "spade", "heart", "club"];
let currentCard;
while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//Do While loop (don't think I've ever used one in my life)
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

//break (break out of loops)
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}
console.log("And if you don't know, now you know.");

/*
Loops perform repetitive actions so we don’t have to code that process manually every time.
How to write for loops with an iterator variable that increments or decrements
How to use a for loop to iterate through an array
A nested for loop is a loop inside another loop
while loops allow for different types of stopping conditions
Stopping conditions are crucial for avoiding infinite loops.
do...while loops run code at least once— only checking the stopping condition after the first execution
The break keyword allows programs to leave a loop during the execution of its block
*/

//Function as a variables
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

//Function as a parameter
//A higher-order function is a function that either accepts functions as parameters, returns a function, or both!
//We call the functions that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.
//With callbacks, we pass in the function itself by typing the function name without the parentheses
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);
/*
Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers
We can work with functions the same way we would any other type of data including reassigning them to new variables
JavaScript functions are first-class objects, so they have properties and methods like any object
Functions can be passed into other functions as parameters
A higher-order function is a function that either accepts functions as parameters, returns a function, or both
*/

//For Each
const fruits = ["mango", "papaya", "pineapple", "apple"];
// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));

//Map .map() is called on an array, it takes an argument of a callback function and returns a new array
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog"
];
// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(""));
//HelloWorld
const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num / 100);
console.log(smallNumbers);
//[ 1, 2, 3, 4, 5 ]

//Filter
// .filter() returns an array of elements after filtering out certain elements from the original array
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below return values that are less than 250
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
});
const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene"
];
// Call .filter() on favoriteWords below return elements that have more than 7 characters
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});

//.findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant"
];
const foundAnimal = animals.findIndex(animal => {
  //find the index of the element that has the value 'elephant'
  return animal === "elephant";
});
const startsWithS = animals.findIndex(animal => {
  // find the index of the first animal that starts with the letter 's'
  return animal[0] === "s" ? true : false;
});

//.reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array
//.reduce() method can also take an optional second parameter to set an initial value for accumulator
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); // <- Second argument for .reduce()
console.log(summedNums); // Output: 117

//some() method checks if any of the elements in an array pass a test
/* some() method executes the function once for each element present in the array:
If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
Otherwise it returns false
*/
var ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}
function myFunction() {
  document.getElementById("demo").innerHTML = ages.some(checkAdult);
}
//Results in "true"

//every is like some but The every() method checks if ALL elements in an array pass a test (provided as a function).
var ages = [11, 32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}
//returns false since we have an 11 & a 16 year old

/*
.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. 
It returns -1 if none of the elements in the array satisfies the condition.
.reduce() iterates through an array and takes the values of the elements and returns a single value.
All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.
*/
