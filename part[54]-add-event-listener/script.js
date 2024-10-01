const h = document.querySelectorAll('h1'); // Selects all <h1> elements
const card = document.querySelectorAll('.card'); // Selects all elements with the class 'card'

function SayHi() {
    console.log("helllo yaar"); // A simple function that logs a message to the console
}

// You commented out the click event assignment to 'h1'
// h1.onclick = SayHi;

// Adds an event listener for a 'click' event on h1 elements (commented out)
// h1.addEventListener('click', SayHi);

// Adds a click event listener to 'card' elements to log a message (commented out)
// card.addEventListener('click', function() {
//     console.log('ayush kumar');
// });

let count = 1; // Initializes a counter variable to 1
debugger // Adds a breakpoint for debugging purposes

// Adds a click event listener to 'card' elements (the code seems incomplete because querySelectorAll was used)
card.addEventListener('click', () => {
    const newImg = document.createElement('div'); // Creates a new <div> element
    newImg.classList.add('img-part'); // Adds the 'img-part' class to the new div
    newImg.innerHTML = count++; // Sets the innerHTML of the div to the current value of 'count', then increments it
    // Appends the new div to 'container' (container is not defined in the code)
    container.append(newImg);
});
