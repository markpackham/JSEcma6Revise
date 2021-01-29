// To run script,    node firstWordsCapitalize.js
my_words = "    this*++-    is nOT A teST232!!!    ";

const firstWordsCapitalize = (words) => {
  words = words.toLowerCase().trim();
  words = words.replace(/[^a-z,^A-Z,^\s]*/g, "");
  // Turn into an array so we can then loop through it and target specific points to captialize
  words = words.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  words = words.join("");

  return words;
};

// outputs, ThisIsNotATest
console.log(firstWordsCapitalize(my_words));
