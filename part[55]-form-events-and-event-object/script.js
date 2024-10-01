//We are selecting an input element with the ID username, a paragraph element, and a form element for further manipulation.
const h1 = document.querySelector('#username'); // Selects the element with the id "username" (likely an <input> element)
const paragraph = document.querySelector('p'); // Selects the first <p> (paragraph) element in the document
const form = document.querySelector('form'); // Selects the <form> element in the document (typo corrected: 'from' to 'form')


//Purpose: Listens for when the user types in the input field. The input event fires whenever the value of the input changes, updating the paragraph with the current input text.
h1.addEventListener('input', (e) => {
    console.log(e); // Logs the event object
    console.log(e.target.value); // Logs the current value of the input field
    console.log(e.type); // Logs the type of event ('input')
    let inputValue = e.target.value; // Stores the current value of the input field
    paragraph.innerText = e.target.value; // Updates the paragraph's text with the value entered in the input field
});


//Purpose: Fires when the input field gets focused (i.e., the user clicks into the field). The paragraph is updated with the value of the input field when focused.
h1.addEventListener('focus', (event) => {
    console.log(event); // Logs the focus event object
    console.log(event.target.value); // Logs the value of the input when focused
    console.log(event.type); // Logs the event type ('focus')
    let inputValue = event.target.value; // Stores the current value of the input field
    paragraph.innerText = event.target.value; // Updates the paragraph with the current input value
});

//Purpose: Fires when the user commits the change (after the input loses focus). The paragraph is updated with the new value.
h1.addEventListener('change', (e) => {
    console.log(e); // Logs the event object
    console.log(e.type); // Logs the event type ('change')
    console.log(e.target.value); // Logs the final value after change is made
    let inputValue = e.target.value; // Stores the current value
    paragraph.innerText = e.target.value; // Updates the paragraph with the input field value after change
});

//Purpose: The blur event fires when the input field loses focus. It logs the value of the input field and updates the paragraph accordingly.
h1.addEventListener('blur', (e) => {
    console.log(e); // Logs the event object
    console.log(e.type); // Logs the event type ('blur')
    console.log(e.target.value); // Logs the current value when input loses focus
    let inputValue = e.target.value; // Stores the current value
    paragraph.innerText = e.target.value; // Updates the paragraph with the current value
});

//Purpose: This event prevents the form from actually submitting and instead logs the form data. The FormData API is used to handle form entries easily.
form.addEventListener('submit', (e) => {
    console.log(e); // Logs the event object
    console.log(e.type); // Logs the event type ('submit')
    e.preventDefault(); // Prevents the form from submitting (reloading the page)
    
    const myForm = new FormData(form); // Grabs all form data
    for (const p of myForm.entries()) { // Loops through form entries
        console.log(p); // Logs each form entry (key-value pair)
    }
});

//Purpose: Listens for a click on the form, logs the clicked element's value, and prevents default form behavior.
form.addEventListener('click', (event) => {
    console.log(event.target.value); // Logs the value of the clicked form element
    e.preventDefault(); // Prevents default behavior (usually form submission)
    console.log(event); // Logs the click event object
});

//