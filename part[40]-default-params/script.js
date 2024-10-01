// Default parameter `b` is set to 1. If the function is called without passing a second argument,
// `b` will default to 1. If both arguments are passed, the provided values will be used.
function multiply(a, b = 1) {
    return a * b  // If `b` is not provided, it multiplies `a` by 1
  }
  
  // Example usage:
  console.log(multiply(5));      // Output: 5 (because 5 * 1)
  console.log(multiply(5, 3));   // Output: 15 (because 5 * 3)
  
  // Default parameter `numberOfSides` is set to 6. If the function is called without passing a value,
  // it will simulate a 6-sided die. If a number is passed, it will simulate a die with that many sides.
  function rollADie(numberOfSides = 6) {
    return Math.floor(Math.random() * numberOfSides) + 1  // Generates a random number between 1 and `numberOfSides`
  }
  
  // Example usage:
  console.log(rollADie());       // Output: a random number between 1 and 6 (default sides)
  console.log(rollADie(10));     // Output: a random number between 1 and 10
  