// Select the button element with the class 'card'
const addCardBtn = document.querySelector('.card');

// Select the container where new cards will be appended
const container = document.querySelector('.container');

// Select the input element for capturing user input
const input = document.querySelector('input');

// Select the form element in the document
const form = document.querySelector('form');

// Initialize a counter variable to keep track of the number of cards created
let count = 1;

// Add an event listener to the button that triggers when it's clicked
addCardBtn.addEventListener('click', () => {
  // Create a new div element to represent a card
  const newCard = document.createElement('div');
  
  // Add the class 'card' to the new card element
  newCard.classList.add('card');
  
  // Set the inner text of the new card to the current count and increment count
  newCard.innerText = count++;
  
  // Append the new card to the container
  container.append(newCard);
});

// The following code snippets are commented out, meaning they won't execute:

// Focus the input field after 1 second
// setTimeout(() => {
//     input.focus(); // Set focus on the input field
//     console.log('Input Focused'); // Log message indicating the input was focused
// }, 1000);

// Blur (remove focus from) the input field after 3 seconds
// setTimeout(() => {
//     input.blur(); // Remove focus from the input field
//     console.log('Input Blurred'); // Log message indicating the input was blurred
// }, 3000);

// Submit the form after 3 seconds (if uncommented)
// setTimeout(() => {
//     form.submit(); // Trigger the form submission
//     console.log('Form Submitted'); // Log message indicating the form was submitted
// }, 3000);

// Reset the form fields to their default values (if uncommented)
// form.reset(); 

// Start a timer that simulates clicking the addCardBtn every 5 milliseconds
// const intervalId = setInterval(() => {
//   if (count > 999) { // Check if count exceeds 999
//     clearInterval(intervalId); // Stop the interval if count exceeds 999
//   }
//   addCardBtn.click(); // Simulate a click on the addCardBtn
// }, 5);
