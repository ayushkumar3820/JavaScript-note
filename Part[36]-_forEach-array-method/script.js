// Declare an array of fruits
const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];

// Using forEach to iterate over the fruits array
fruits.forEach(function(fruit, index) {
    console.log(index, ': ', fruit);  
    // Output:
    // 0 : banana
    // 1 : apple
    // 2 : peach
    // 3 : mango
    // 4 : grapes
});

console.log('*************************');

// Using arrow function in forEach
fruits.forEach((fruit, index) => {
    console.log(index, ': ', fruit);  
    // Output:
    // 0 : banana
    // 1 : apple
    // 2 : peach
    // 3 : mango
    // 4 : grapes
});

console.log('*************************');

// Declare an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using forEach to calculate and print the square of each number
numbers.forEach(function(number) {
    console.log('Square of', number, 'is', number * number);  
    // Output:
    // Square of 1 is 1
    // Square of 2 is 4
    // Square of 3 is 9
    // Square of 4 is 16
    // Square of 5 is 25
});

console.log('*************************');

// Using arrow function in forEach
numbers.forEach(number => {
    console.log('Square of', number, 'is', number * number);  
    // Output:
    // Square of 1 is 1
    // Square of 2 is 4
    // Square of 3 is 9
    // Square of 4 is 16
    // Square of 5 is 25
});

console.log('*************************');

// Declare an object with key-value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    city: 'Bangalore',
};

// Extracting keys and values and using forEach on the array of entries
Object.entries(person).forEach(([key, value]) => {
    console.log(key, ':', value);  
    // Output:
    // firstName : John
    // lastName : Doe
    // age : 50
    // eyeColor : blue
    // city : Bangalore
});
