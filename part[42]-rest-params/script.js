// Declaring an array
const nums1 = [1, 2, 3, 4];

// Function that takes any number of arguments using the rest parameter (...nums)
// The rest parameter allows the function to accept an indefinite number of arguments as an array
function add(...nums) {
  // Using reduce to sum up all the numbers in the nums array
  return nums.reduce((acc, curr) => acc + curr);
}

// Using the spread operator to pass the elements of nums1 as individual arguments to the add function
const result = add(...nums1); 
// Spread operator (...nums1) spreads the array into individual elements (1, 2, 3, 4)
// These elements are passed as arguments to the add function

console.log(result);  // Output: 10 (because 1 + 2 + 3 + 4 = 10)
