// Declare an array of fruits
const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];

// Using a traditional for loop to iterate over the fruits array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);  // Prints each fruit in the array
}

console.log('*************************');

// Using a for...of loop to iterate over the fruits array
for (const fruit of fruits) {
    console.log(fruit);  // Prints each fruit in the array
}

// Declare a string variable
const user = 'Ayush';

// Using a for...of loop to iterate over each character in the string
for (const letter of user) {
    console.log(letter);  // Prints each letter of the string 'user'
}

// Declare an object with several properties
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    city: 'Bangalore',
};

// Using a for...in loop to iterate over each key in the person object
for (const key in person) {
    console.log(key, ': ', person[key]);  // Prints each key and corresponding value in the object
}

// Extracting keys from the person object into an array
const personKeys = Object.keys(person);

// Extracting values from the person object into an array
const personValues = Object.values(person);

// Extracting key-value pairs (entries) from the person object into an array
const personEntries = Object.entries(person);

// Using a for...of loop to iterate over the personKeys array
for (const key of personKeys) {
    console.log(person[key]);  // Prints the value associated with each key in the person object
}
