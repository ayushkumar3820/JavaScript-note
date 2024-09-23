
debugger
const maths = {
    
    E: 2.718281828459045,
  
    // Function to add two numbers
    add : function (a, b) {
      return a + b;
    },
  
    // Function to calculate the square of a number
    square: function (num) {
      return num * num;
    },
  
    // Function to subtract two numbers
    subtract: function (a, b) {
      return a - b;
    },
  
    // Function to calculate the cube of a number
    cube: function (num) {
      return num ** 3;
    }
  };
  
  // Example usage:
  console.log(maths.add(2, 3));     // Output: 5
  console.log(maths.square(4));     // Output: 16
  console.log(maths.subtract(7, 2)); // Output: 5
  console.log(maths.cube(3));       // Output: 27
  