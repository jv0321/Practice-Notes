// 1. Write a function which takes in a string and returns counts of each character in the string.
// Exmamples.
chatCount("aaaa");
// {
//     a:4
// }
chatCount("hello");
// {
//     h: 1,
//     e: 1,
//     l: 2,
//     o: 1
// }
chatCount("Your PIN number is 1234")
// {
//     1: 1,
//     2: 1,
//     3: 1,
//     4: 1,
//     b: 1,
//     e: 1,
//     i: 2,
//     m: 1,
//     n: 1,
//     o: 1,
//     p: 1,
//     r: 1,
//     s: 1,
//     u: 2,
//     y:1
// }
function chatCount(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the characters
}

// function chatCount(str) {
//     // make object to return at end
//     var result = {};
//     // loop over string, for each character..
//     for(var i = 0; i < str.length; i++){
//         var char = str[i]
//         // if the char is a number/letter and is a key in object, add one to it (+i)
//         if(result[char] > 0) {
//             result[char]++;
//         // if the char is number/letter and is not in object, add it to the object and set value to 1 (i=1)
//         } else {
//             result[char] = 1;
//         };
//     }
//        // if character is something else (!@#$%^&*=+)dont do anything.
//     // return object at end
//     return result;
// }

// console.log(chatCount("hello"));

function charCount(str) {
    var obj = {};
    // for (var i = 0; i < str.length; i++) {
    //     var char = str[i].toLowerCase();
    //     if (/[a-z0-9]/.test(char)) {
    //         if (obj[char] > 0) {
    //             obj [char] ++;
    //         } else {
    //             obj [char] = 1;
    //         };
    //     }
    // }
    for (var char of str) {
        for (var char of str) {
            char = char.toLowerCase();
            if (/[a-z0-9]/.test(char)) {
                obj[char] = ++obj [char] || 1;
            }
        }
    }
    return obj;
}

console.log(charCount("hello"));

// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Given an array of names, log each name:
const names = ["Juan", "Maria", "Luis", "Ana"];
for (let i = 0; i < names.length; i ++) {
    console.log(names[i]);
} 

// Calculate the sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum)

// Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
// Loop through numbers 1 to 20
    if (i % 2 === 0) {
    // Check if the number is even    
        console.log(i); //Print the number
    }
}

// Sum of first 10 numbers
let sum = 0; //start with 0

// loop through numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    sum += i; //Add the current number to sum
}

console.log("the sum is", sum)

// Initialize a counter (i) to 0
// Set a condition, then run the loop as long as is less than 5
// execute the loopafter each loop increase by 1
// top when (5) is more than 5
for (let i = 0; i < 5; i++) {
    console.log(i)
}

//Count the vowels in a string
function countVowels(str) { //create the function
    let count = 0;
    const vowels = "aeiou"; //create the variables

    for (let char of str.toLowerCase ()) {
        if(vawels.includes(char)) {
            count++;
        }
    }
    return count;

}
