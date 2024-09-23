// Function Declaration
// Declares a function named "square" that takes one parameter "num" and returns its square (num * num).
function square(num) {
    return num * num;
}

// Function Expression
// Assigns an anonymous function to the variable "square". The function takes one parameter "num" and returns its square.
const square = function(num) {
    return num * num;
};

// Arrow Function Expression (long form)
// Declares a function using arrow syntax. The function takes one parameter "num" and returns its square.
const square = (num) => {
    return num * num;
};

// Arrow Function Expression (short form)
// Declares an arrow function with a single parameter "num" that implicitly returns its square (num * num).
const square = num => num * num;

// Arrow function for addition
// Declares an arrow function "add" that takes two parameters "a" and "b", and returns their sum (a + b).
const add = (a, b) => a + b;

// Arrow function for generating a random number
// Declares an arrow function "random" that returns a random number between 1 and 10.
const random = () => (
    Math.floor(Math.random() * 10) + 1
);

// setTimeout with an arrow function
// Uses setTimeout to delay the execution of the arrow function by 2000ms (2 seconds), which logs 'hiii' to the console.
setTimeout(() => {
    console.log('hiii');
}, 2000);
