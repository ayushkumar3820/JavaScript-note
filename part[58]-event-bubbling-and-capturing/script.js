// Selects the first elements with the class names 'green', 'pink', and 'blue' and stores them in corresponding variables
const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

// Adds an event listener to the window object, listening for a 'click' event
// The {capture: false} means the event will be handled during the bubbling phase, not the capture phase
window.addEventListener('click', (e) => {
    console.log('6. Window Event Listener');
}, {capture: false})

// Adds an event listener to the document object, listening for a 'click' event in the bubbling phase
document.addEventListener('click', (e) => {
    console.log('5. Document Event Listener');
}, {capture: false})

// Adds an event listener to the body element, listening for a 'click' event in the bubbling phase
document.body.addEventListener('click', (e) => {
    console.log('4. Body Event Listener');
}, {capture: false})

// Adds an event listener to the 'green' element, listening for a 'click' event in the bubbling phase
green.addEventListener('click', (e) => {
    console.log('3. Green Event Listener');
}, {capture: false})

// Adds an event listener to the 'pink' element, listening for a 'click' event in the bubbling phase
pink.addEventListener('click', (e) => {
    console.log('2. Pink Event Listener');
}, {capture: false})

// Adds an event listener to the 'blue' element, listening for a 'click' event in the bubbling phase
blue.addEventListener('click', (e) => {
    console.log('1. Blue Event Listener');
}, {capture: false})

// Optional code: Adds an event listener to the 'blue' element that only triggers once due to {once: true}
// This listener is triggered only the first time the element is clicked, and then it's automatically removed
// blue.addEventListener('click', (e) => {
//     console.log('1. Blue Event Listener');
// }, {once: true})
