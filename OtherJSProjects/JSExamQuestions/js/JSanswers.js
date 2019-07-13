//Revise Map
document.writeln('The map() method creates a new array with the results of calling a provided function on every element in the calling array.');
var array1 = [1, 4, 9, 16];
document.writeln('<br /> It will be a big help later on, we *2 everything in array1 [1, 4, 9, 16] via array1.map(x => x * 2) <br />');

// pass a function to map
const map1 = array1.map(x => x * 2);

document.writeln('Giving us : ', map1, '<br /><br />');

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseStringLoop(str) {
    let revString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
        document.writeln(revString);
    }
    return revString;
}

document.writeln("<br />Reverse string loop 'hello': ", reverseStringLoop('hello'));


function reverseString(str) {
    //Make sure that split has no space in '', we just want to make it an array, use join to return it into a string
    // return str
    //   .split('')
    //   .reverse()
    //   .join('');

    ////////////////////////

    // let revString = '';
    // for(let char of str) {
    //   revString = char + revString;
    // }
    // return revString;

    ///////////////////////

    // let revString = '';
    // str.split('').forEach(char => revString = char + revString);
    // return revString;

    //////////////////////

    return str.split('').reduce((revString, char) => char + revString, '');
}

document.writeln("<br />Reverse string 'hello': ", reverseString('hello'), "<br /><br />");


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindromeLoop(str) {
    let isPali = true;
    let caseStr = str.toLowerCase()
    let arr = caseStr.split('')
    for (let i = 0; i < arr.length; i++) {
        document.writeln(i);
        if (arr[i] !== arr[arr.length - 1 - i]) {
            isPali = false;
            break;
        }
    }
    return isPali
}

document.writeln("<br />Is 'racecar' a palendrom, isPalindromeLoop: ", isPalindromeLoop('racecar'));


function isPalindrome(str) {
    const revString = str.split('').reverse().join('');

    return revString === str;
}

document.writeln("<br />Is 'racecar' a palendrom (same backwords as forwards): ", isPalindrome('racecar'));
document.writeln("<br />Is 'Sanguinius' a palendrom: ", isPalindrome('Sanguinius'), "<br /><br />");


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');
    document.writeln("Before Math.sign(int) ", revString);
    //thanks to Math.sign we can handle negatives and not lose the -
    return parseInt(revString) * Math.sign(int);
}

document.writeln("<br />Reverse Int 12345: ", reverseInt(12345), "<br /><br />");
document.writeln("<br />Reverse Int -12345: ", reverseInt(-12345), "<br /><br />");


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLettersLoop(str) {
    const strArr = str.toLowerCase().split(' ');

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
        document.writeln(strArr[i].substring(0, 1), "<br />");
        document.writeln(strArr[i].substring(1));
    }

    return strArr.join(' ');
}

document.writeln("<br />capitalizeLettersLoop 'i love javascript':", capitalizeLettersLoop('i love javascript'), "<br />");

function capitalizeLetters(str) {
    /////////////////////////////

    // return str
    //   .toLowerCase()
    //   .split(' ')
    //   .map(word => word[0].toUpperCase() + word.substr(1))
    //   .join(' ');

    /////////////////////////////

    // word boundary \b, range of lower case a-z, 'g' for global and 'i' for case insensitive
    return str.replace(/\b[a-z]/gi, function (char) {
        return char.toUpperCase();
    });
}

document.writeln("<br />Uppercase the first letters of 'i love javascript':", capitalizeLetters('i love javascript'));


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function (char) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
        document.writeln('<br >', char, charMap[char]);
    });

    //for in loops through objects rather than arrays
    for (let char in charMap) {
        // debugger is Node.JS' debug mode
        // debugger;
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

document.writeln("<br />Return the most common char in a string like 'apple': ", maxCharacter('apple'), '<br /><br />');


function maxCharAlternate(str) {
    // Here is my version of the algorithm.
// I put the string into an array and I sort it.
// Then I loop through the array keeping track of the count for each character.
// I keep track of the "current character" and the "max character" with objects.

    const sortedStr = str.split('').sort();
    const maxChar = {char: '', count: 0};
    const currentChar = {char: '', count: 0};

    sortedStr.forEach(char => {
        if (currentChar.char === char) {
            currentChar.count++;
            document.writeln(currentChar.char);
        } else {
            if (maxChar.count < currentChar.count) {
                maxChar.char = currentChar.char;
                maxChar.count = currentChar.count;
                document.writeln('<br />', maxChar.char, maxChar.count.toString(), '<br />');
            }
            currentChar.char = char;
            currentChar.count = 0;
        }
    });

    return maxChar.char;
}

document.writeln("<br />maxCharAlternate('antidisestablishmentarianism'): ", maxCharAlternate('antidisestablishmentarianism'), '<br />');


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
//   for(let i = 1; i <= 100; i++) {
//     if(i % 15 === 0) {
//       console.log('FizzBuzz');
//     } else if(i % 3 === 0) {
//       console.log('Fizz');
//     } else if(i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }

    // for(let i = 1; i <= 100; i++) {
    //   let printNum=true;
    //    if(i % 3 === 0)
    //      console.log('Fizz');
    //    if(i % 5 === 0)
    //      console.log('Buzz');
    //   // if divisable by 3 then i%3 is zero,
    //   // if divisable by 5 then i%5 is zero,
    //   // if divisable by 3 or 5 then i%3*i%5 is zero then don't print
    //    printNum=((i%3*i%5)!==0);
    //   if(printNum) {
    //      console.log(i);
    //   }
    // }
    for (var i = 1; i <= 100; i++) {
        let output = '';
        if (i % 3 === 0) {
            output += 'fizz';
        }
        if (i % 5 === 0) {
            output += 'buzz';
        }
        document.writeln(output || i);
    }
}

document.writeln('<br />Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".<br />')

// Call Function
const output = fizzBuzz();
