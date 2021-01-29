// answer is "a"
my_string = "abcdefg";
// answer is "b"
my_string2 = "aaaaabcdefg";
// answer is "a"
my_string3 = "abcccccdefggggg";
// "All characters repeat"
my_string4 = "aabbcc";

const firstNonRepeatingCharacter = (str) => {
  for (let i = 0; i < str.length; i++) {
    // if the first place you find the character is exactly the same as the last place it does not repeat
    if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
      return str.charAt(i);
    }
  }
  return "All characters repeat";
};

console.log(firstNonRepeatingCharacter(my_string));
console.log(firstNonRepeatingCharacter(my_string2));
console.log(firstNonRepeatingCharacter(my_string3));
console.log(firstNonRepeatingCharacter(my_string4));

//
//
//
// Alternative uglier solution if you need to use a Map (like a Hash Map in Java)
const firstNonRepeatingCharacter2 = (str) => {
  let myMap = new Map();
  // loop dedicated to giving a count of each character
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (myMap.has(c)) {
      myMap.set(c, myMap.get(c) + 1);
    } else {
      myMap.set(c, 1);
    }
  }

  // we only want to find the first character whose count is
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (myMap.get(c) == 1) return c;
  }

  return "All characters repeat";
};

// What the first Map looks like
/*
  Map(7) {
  'a' => 1,
  'b' => 1,
  'c' => 1,
  'd' => 1,
  'e' => 1,
  'f' => 1,
  'g' => 1
}
*/
console.log(firstNonRepeatingCharacter2(my_string));
console.log(firstNonRepeatingCharacter2(my_string2));
console.log(firstNonRepeatingCharacter2(my_string3));
// What the last Map looks like
// Map(3) { 'a' => 2, 'b' => 2, 'c' => 2 }
console.log(firstNonRepeatingCharacter2(my_string4));
