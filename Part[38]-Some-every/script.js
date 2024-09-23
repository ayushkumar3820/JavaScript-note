const evenNumbers = [0, 2, 10, 4, 61, 8];

// Using `some` to check if any element is odd
// Uncomment the following code if you want to check the result with `some`:
// const result = evenNumbers.some((num, i) => {
//     if (num % 2 === 1) {  // Check if the number is odd (num % 2 === 1)
//         console.log(i);    // Log the index of the odd number
//     }
//     return num % 2 === 1;  // Return true if the number is odd
// });

// Expected output for `some`:
// The loop will stop at the first odd number (61 at index 4), logging:
// 4
// result: true

// Using `every` to check if all elements are even
const result = evenNumbers.every((num) => {
    debugger;  // You can use the debugger for step-by-step execution if running in a debugger environment
    return num % 2 === 0;  // Check if the number is even (num % 2 === 0)
});

// Output of `every`:
console.log(result);  // Output: false (because 61 is not even)
