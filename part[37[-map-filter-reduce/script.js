// Declare an array of months
const months = ['January', 'February', 'March', 'April', 'May', 'December'];

// Using map to create a new array with months in uppercase
const capitalMonths = months.map((month, index, array) => {
    // console.log(index + 1, month);  // Uncomment to print the index and month
    // console.log(array);  // Uncomment to print the original array
    return month.toUpperCase();  // Converts each month to uppercase
});

// Output of capitalMonths:
console.log(capitalMonths);
// ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'DECEMBER']

console.log('*************************');

// Using filter to create a new array where the condition always returns false
// No element will pass this filter since it always returns false.
const filteredMonths = months.filter((month, index, array) => {
    // console.log(month.toLocaleLowerCase().includes('m'));  // Uncomment to check for 'm'
    // console.log(array);  // Uncomment to print the original array
    return false;  // This will exclude all months from the filtered array
});

// Output of filteredMonths:
console.log(filteredMonths);
// []

console.log('*************************');

// Declare an array of student objects
const students = [
    { name: 'Akash', age: 21 },
    { name: 'Adarsh', age: 17 },
    { name: 'Amir', age: 18 },
    { name: 'Raman', age: 23 },
    { name: 'Nidhi', age: 16 },
];

// Using filter to get students who are 18 or older, then map to get their names
// After that, filter those names that include the letter 'A'
const adultStudents = students.filter((student) => {
    return student.age >= 18;  // Keep students who are 18 or older
}).map((student) => {
    return student.name;  // Get their names
}).filter((student) => {
    return student.includes('A');  // Keep names that include the letter 'A'
});

// Output of adultStudents:
console.log(adultStudents);
// ['Akash', 'Amir']
