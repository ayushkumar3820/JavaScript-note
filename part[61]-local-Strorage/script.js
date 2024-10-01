const nameTag = document.querySelector('.name-tag');
const myName = document.querySelector('.name');

const ageTag = document.querySelector('.age-tag');
const myAge = document.querySelector('.age');

debugger



// Update localStorage and the DOM for Name
myName.addEventListener('input', (e) => {
    localStorage.setItem('Name', e.target.value);  // Store Name in localStorage
    nameTag.innerText = e.target.value;  // Update nameTag display
});

// Update localStorage and the DOM for Age
myAge.addEventListener('input', (e) => {
    localStorage.setItem('Age', e.target.value);  // Store Age in localStorage
    ageTag.innerText = e.target.value;  // Update ageTag display
});

// For storing both Name and Age in a single object in localStorage
const myData = JSON.parse(localStorage.getItem('myData')) || {};

// Initialize nameTag and ageTag with values from localStorage, if available
nameTag.innerText = localStorage.getItem('Name') || '';  // Get Name from localStorage
ageTag.innerText = localStorage.getItem('Age') || '';  // Get Age from localStorage

// Store Name in the `myData` object and update localStorage
myName.addEventListener('input', (e) => {
    myData.name = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    nameTag.innerText = e.target.value;
});

// Store Age in the `myData` object and update localStorage
myAge.addEventListener('input', (e) => {
    myData.age = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData));
    ageTag.innerText = e.target.value;
});
