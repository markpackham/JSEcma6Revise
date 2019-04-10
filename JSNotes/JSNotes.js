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

console.log(logCitySkyline());
