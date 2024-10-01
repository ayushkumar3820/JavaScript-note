// Declaring an array of colors
const colors = ['red', 'green', 'yellow', 'pink', 'black', 'white'];

// Old way of accessing elements of an array
// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

// Using array destructuring to extract the first three elements
const [color1, color2, color3] = colors;
// color1 will be 'red', color2 will be 'green', color3 will be 'yellow'

// You can also destructure elements by skipping values
// For example, to skip the first three elements and extract the 4th element:
const { 3: color4, 5: color5 } = colors;
// This method grabs specific elements at index 3 and 5 directly
// color4 will be 'pink', color5 will be 'white'

console.log(color1, color2, color3, color4, color5); 
// Output: red green yellow pink white

// Declaring an object `user`
const user = {
  name: 'Anurag',
  age: 25,
  address: {
    city: 'Bangalore',
    state: 'Karnataka',
  },
};

// Old way of extracting properties from an object
// const name = user.name
// const age = user.age

// Using object destructuring to extract `name` and `age`
const { name, age } = user;
// Now `name` will be 'Anurag' and `age` will be 25

// You can also rename variables during destructuring
// const { name: username, age: userAge } = user
// This will create variables `username` and `userAge` with the values of `name` and `age`

// Nested destructuring to extract city from the nested address object
// const { address: { city } } = user
// `city` will be 'Bangalore'

// Alternatively, destructuring can be done in steps
// const { address } = user
// const { city } = address
// This way, you first extract the address, and then extract the city from that

console.log(name, age);
// Output: Anurag 25

// Function that uses object destructuring in its parameters
function intro({ age, name }) {
  console.log(age, name);  // Logs the `age` and `name` properties of the passed object
}

// Calling the `intro` function with the `user` object
intro(user);
// Output: 25 Anurag

// Function that uses array destructuring in its parameters
function printColor([a, b, , g]) {
  console.log(a, b, g);  // Logs the first, second, and fourth colors from the array
}

// Calling `printColor` with the `colors` array
printColor(colors);
// Output: red green pink
