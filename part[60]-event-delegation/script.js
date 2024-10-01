// Event delegation is a technique in JavaScript that allows you to handle events efficiently, especially when you have many elements that need the same event handler. Instead of adding 
// individual event listeners to each child element, you add a single event listener to a parent element. The event listener then catches events from the child elements due to event bubbling, 
// where events triggered on child elements propagate up to their parents



// Selecting the first element with the class 'card' and storing it in the addCard variable
const addCard = document.querySelector('.card');

// Selecting the first element with the class 'container' and storing it in the container variable
const container = document.querySelector('.container');

// Selecting all elements with the class 'card' and storing the NodeList in the cardList variable
const cardList = document.querySelectorAll('.card');

// Initializing a counter variable to track the number of new cards added
let count = 0;

// Adding an event listener to the 'addCardButton' element, listening for a 'click' event
addCardButton.addEventListener('click', () => {
    // Creating a new <div> element to represent the card
    const newCard = document.createElement('div');
    
    // Adding the class 'card-container' to the new card element
    newCard.classList.add('card-container');
    
    // Setting the text inside the new card to the current count value and then incrementing count
    newCard.innerText = count++;
    
    // Appending the newly created card element to the 'container' element
    container.append(newCard);
});

// Adding an event listener to the 'container' element, listening for a 'click' event
container.addEventListener('click', (e) => {
    // If the clicked target (e.target) is not the container itself, the clicked element is removed
    if (e.target !== container) {
        e.target.remove();
    }
});
