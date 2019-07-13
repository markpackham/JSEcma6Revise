/*
Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:
Pending: The initial state— the operation has not completed yet.
Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.
*/

//to run a file called "app.js" type "node app.js"

//Constructing a Promise example
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

const orderSunglasses = () => {
  return new Promise(myExecutor); //we create the Promise here with a constructor function
};

const orderPromise = orderSunglasses();

console.log(orderPromise);

//setTimeout
console.log("This is the first line code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log("Some code");
};
setTimeout(usingSTO, 3000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

/*
.then() method allows us to say, “I have a promise, when it settles, then here’s what I want to happen…”
.then() is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.
The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.
*/

//onFulfilled and onRejected
const { checkInventory } = require("./library.js");

const order = [["sunglasses", 1], ["bags", 2]];

// Write your code below:
const handleSuccess = resolvedValue => {
  console.log(resolvedValue);
};

const handleFailure = rejectReason => {
  console.log(rejectReason);
};
//are onFulfilled & onRejected functions
checkInventory(order).then(handleSuccess, handleFailure);

//.catch (handles rejections & is tagged onto the end of a .then function)
const { checkInventory } = require("./library.js");

const order = [["sunglasses", 1], ["bags", 2]];

const handleSuccess = resolvedValue => {
  console.log(resolvedValue);
};

const handleFailure = rejectReason => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure);

// process of chaining promises together is called composition
const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [["sunglasses", 1], ["bags", 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
  .then(resolvedValueArray => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray);
  })
  .then(resolvedValueArray => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray);
  })
  .then(successMessage => {
    console.log(successMessage);
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });

//fixing common errors (making sure {} are properly placed rather than dumped in 1 giant {} & we "return" our Promises)
const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [["sunglasses", 1], ["bags", 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
  .then(resolvedValueArray => {
    return processPayment(resolvedValueArray);
  })
  .then(resolvedValueArray => {
    return shipOrder(resolvedValueArray);
  })
  .then(successMessage => {
    console.log(successMessage);
  });

// Promise.all().
/*
concurrency, multiple asynchronous operations happening together. With promises, we can do this with the function concurrency, 
multiple asynchronous operations happening together. With promises, we can do this with the function Promise.all()..
  */
/*
Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:

If every promise in the argument array resolves, the single promise returned from Promise.all() 
will resolve with an array containing the resolve value from each promise in the argument array.
If any promise from the argument array rejects, the single promise returned from Promise.all() 
will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.
 */
const { checkAvailability } = require("./library.js");
const onFulfill = itemsArray => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(
    `Every item was available from the distributor. Placing order now.`
  );
};
const onReject = rejectionReason => {
  console.log(rejectionReason);
};
const checkSunglasses = checkAvailability("sunglasses", "Favorite Supply Co.");
const checkPants = checkAvailability("pants", "Favorite Supply Co.");
const checkBags = checkAvailability("bags", "Favorite Supply Co.");
Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);

/*
Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
Promises can be in one of three states: pending, resolved, or rejected.
A promise is settled if it is either resolved or rejected.
We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
To use promise composition correctly, we have to remember to return promises constructed within a .then().
We should chain multiple promises rather than nesting them.
To take advantage of concurrency, we can use Promise.all().
*/

//await (more readible than the old way of doing things)
const fs = require("fs");
const promisifiedReadfile = require("./promisifiedReadfile");

// Here we use fs.readfile() and callback functions:
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile("./file2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile("./file.txt", "utf-8")
  .then(data => {
    firstSentence = data;
    return promisifiedReadfile("./file2.txt", "utf-8");
  })
  .then(data => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  })
  .catch(err => {
    console.log(err);
  });

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile("./file.txt", "utf-8");
  let secondSentence = await promisifiedReadfile("./file2.txt", "utf-8");
  console.log(firstSentence, secondSentence);
}
readFiles();

/*
async keyword is used to write functions that handle asynchronous actions. 
We wrap our asynchronous logic inside a function prepended with the async keyword. 
Then, we invoke that function.
*/
function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

withConstructor(0).then(resolveValue => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
});

// Write your code below:
async function withAsync(num) {
  if (num === 0) {
    return "zero";
  } else {
    return "not zero";
  }
}

withAsync(100).then(resolveValue => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
});

//await Operator
//async functions are almost always used with the additional keyword await
const brainstormDinner = require("./library.js");

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then(meal => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();

//Dependent Promises (run one after the other making sure they are in the correct order)
const { shopForBeans, soakTheBeans, cookTheBeans } = require("./library.js");

// Write your code below:
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();

//Try & Catch (easier for debugging)
const cookBeanSouffle = require("./library.js");

// Write your code below:

async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  } catch (error) {
    console.log(error);
    console.log("Ordering a pizza!");
  }
}

hostDinnerParty();

//Waiting vs running concurrently
//we pause our function until the first promise resolves, then we construct the second promise. Once that resolves, we print both resolved values to the console.
async function waiting() {
  const firstValue = await firstAsyncThing();
  const secondValue = await secondAsyncThing();
  console.log(firstValue, secondValue);
}

async function concurrent() {
  //both promises’ asynchronous operations can be run simultaneously
  const firstPromise = firstAsyncThing();
  const secondPromise = secondAsyncThing();
  console.log(await firstPromise, await secondPromise);
}

//Await Promise.all()
/*
simultaneously is to await a Promise.all().

We can pass an array of promises as the argument to Promise.all(), and it will return a single promise. 
This promise will resolve when all of the promises in the argument array have resolved. 
This promise’s resolve value will be an array containing the resolved values of each promise from the argument array.
*/
let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken
} = require("./library.js");

// Write your code below:
async function serveDinnerAgain() {
  let foodArray = await Promise.all([
    steamBroccoli(),
    cookRice(),
    bakeChicken(),
    cookBeans()
  ]);

  console.log(
    `Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${
      foodArray[2]
    }, and ${foodArray[3]}.`
  );
}

serveDinnerAgain();

/*
Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
await returns the resolved value of the awaited promise.
We can write multiple await statements to produce code that reads like synchronous code.
We use try...catch statements within our async functions for error handling.
We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.
*/
