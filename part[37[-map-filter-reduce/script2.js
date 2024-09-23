// Declare an array of numbers
const nums = [1, 2, 3, 4, 5];

// Using reduce to multiply all the numbers in the array
const sum = nums.reduce((accumulator, current, i) => {
    // console.log(i, current);  // Uncomment to log the index and the current number
    // console.log(accumulator);  // Uncomment to log the current value of accumulator
    return accumulator * current;  // Multiply accumulator by the current number
}, 0);  // Initial value of accumulator is set to 0

// Output of sum:
console.log(sum);  // Output: 0
