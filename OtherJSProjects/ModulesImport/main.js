import User, { printName as printUserName, printAge } from "/user.js";

const user = new User("Mark", 100);
console.log(user);
printUserName(user);
printAge(user);
