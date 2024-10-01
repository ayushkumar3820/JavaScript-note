// Declaring two arrays, nums1 and nums2
const nums1 = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8, 9];

// Declaring a string
const myName = 'Ayush';

// Using the spread operator to combine nums1 and nums2 arrays, and adding additional elements (10, 11, 12).
const joinedArray = [...nums1, ...nums2, 10, 11, 12];
// The spread operator (...) expands the elements of nums1 and nums2 into the new array.
// joinedArray will be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(joinedArray); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Declaring an object
const user = {
    name: 'Ayush  ',
    age: 25,
};

// Using the spread operator to create a new object, and adding a new key-value pair `city: 'Bangalore'`.
const updatedUser = {...user, city: 'Bangalore'};
// The spread operator (...) copies all
