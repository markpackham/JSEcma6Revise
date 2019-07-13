/* a lazy way to write a traditional for loop which is good for arrays
for (variable of iterable) {
  statement
}

It is far slower than a regular for loop & for each is faster than a regualr for loop
*/
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30

//Doing so with a Map
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
