const h1 = document.querySelector('h1'); // Selects the first <h1> element on the page
const input = document.querySelector('input'); // Selects the first <input> element on the page



// Adds an event listener for the 'keypress' event
h1.addEventListener('keypress', (event) => {
    // Logs the code of the key pressed (like "KeyA", "KeyB")
    console.log('code', event.code); 
    // Logs the actual character or key pressed (like "a", "b")
    console.log('key', event.key); 
});

// Adds an event listener for the 'keypress' event
input.addEventListener('keypress', (event) => {
    // Logs the code of the key pressed (like "KeyA", "KeyB")
    console.log('code', event.code); 
    // Logs the actual character or key pressed (like "a", "b")
    console.log('key', event.key); 
});

// Adds an event listener for the 'keydown' event
window.addEventListener('keydown', (event) => {
    // Logs the code of the key when it is pressed down
    console.log('code', event.code); 
    // Logs the actual character or key when it is pressed down
    console.log('key', event.key); 
});

// Adds an event listener for the 'keyup' event
window.addEventListener('keyup', (event) => {
    // Logs the code of the key when it is released
    console.log('code', event.code); 
    // Logs the actual character or key when it is released
    console.log('key', event.key); 
});
